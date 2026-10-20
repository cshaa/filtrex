// the parser is dynamically generated from generateParser.js at compile time
import { parser } from "./parser.mjs";
import {
  hasOwnProperty,
  bool,
  num,
  numstr,
  mod,
  arr,
  str,
  flatten,
  code,
} from "./utils.mjs";
import {
  UnknownFunctionError,
  UnknownPropertyError,
  UnknownOptionError,
  InternalError,
} from "./errors.mjs";

// Shared utility functions
const std = {
  isfn(fns, funcName) {
    return hasOwnProperty(fns, funcName) && typeof fns[funcName] === "function";
  },

  unknown(funcName) {
    throw new UnknownFunctionError(funcName);
  },

  coerceArray: arr,
  coerceNumber: num,
  coerceNumberOrString: numstr,
  coerceBoolean: bool,

  isSubset(a, b) {
    const A = arr(a);
    const B = arr(b);
    return A.every((val) => B.includes(val));
  },

  warnDeprecated: (function () {
    const warnMax = 3;

    let warnedTimes = {
      ternary: 0,
      modulo: 0,
    };

    return (cause, value) => {
      switch (cause) {
        case "ternary":
          if (warnedTimes.ternary++ >= warnMax) break;
          console.warn(
            "The use of ? and : as conditional operators has been deprecated " +
              "in Filtrex v3 in favor of the if..then..else ternary operator. " +
              "See issue #34 for more information.",
          );
          break;

        case "modulo":
          if (warnedTimes.modulo++ >= warnMax) break;
          console.warn(
            "The use of '%' as a modulo operator has been deprecated in Filtrex v3 " +
              "in favor of the 'mod' operator. You can use it like this: '3 mod 2 == 1'. " +
              "See issue #48 for more information.",
          );
          break;
      }

      return value;
    };
  })(),

  buildString(quote, literal) {
    quote = String(quote)[0];
    literal = String(literal);
    let built = "";

    if (literal[0] !== quote || literal[literal.length - 1] !== quote)
      throw new InternalError(
        `Unexpected internal error: String literal doesn't begin/end with the right quotation mark.`,
      );

    for (let i = 1; i < literal.length - 1; i++) {
      if (literal[i] === "\\") {
        i++;
        if (i >= literal.length - 1)
          throw new InternalError(
            `Unexpected internal error: Unescaped backslash at the end of string literal.`,
          );

        if (literal[i] === "\\") built += "\\";
        else if (literal[i] === quote) built += quote;
        else
          throw new InternalError(
            `Unexpected internal error: Invalid escaped character in string literal: ${literal[i]}`,
          );
      } else if (literal[i] === quote) {
        throw new InternalError(
          `Unexpected internal error: String literal contains unescaped quotation mark.`,
        );
      } else {
        built += literal[i];
      }
    }

    return built;
  },

  reduceRelation(arr) {
    const declarations = [];
    const comparisons = [];

    let previousExpression = flatten([arr[0]]).join("");
    let j = 0;

    for (let i = 1; i < arr.length - 1; i += 2) {
      const expr = flatten([arr[i + 1]]).join("");
      const tempVar = `tmp${j++}`;

      comparisons.push(
        `ops["${arr[i]}"](${previousExpression}, ${tempVar} = ${expr})`,
      );
      previousExpression = tempVar;
      declarations.push(tempVar);
    }

    return `(function(){ var ${declarations.join(", ")}; return ${comparisons.join(" && ")};})()`;
  },
};

parser.yy = Object.create(std);

/**
 * A custom prop function which doesn't throw an UnknownPropertyError
 * if the user tries to access a property of `undefined` and `null`,
 * but instead returns `unknown` or `null`. This effectively turns
 * `a of b` into `b.?a`. You can use this function using the following
 * code:
 * ```
 * import {
 *   compileExpression,
 *   useOptionalChaining
 * } from 'filtrex'
 *
 * const expr = "foo of bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useOptionalChaining
 * });
 *
 * fn({ bar: null }) // → { success: true, value: null }
 * ```
 */
export function useOptionalChaining(name, get, obj, type) {
  if (obj === null || obj === undefined) return obj;

  return get(name);
}

/**
 * A custom prop function which treats dots inside a symbol
 * as property accessors. If you want to use the `foo.bar`
 * syntax to access properties instead of the default
 * `bar of foo`, you can use this function using the following
 * code:
 * ```
 * import {
 *   compileExpression,
 *   useDotAccessOperator
 * } from 'filtrex'
 *
 * const expr = "foo.bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useDotAccessOperator
 * });
 *
 * fn({ foo: { bar: 42 } }) // → { success: true, value: 42 }
 * ```
 */
export function useDotAccessOperator(name, get, obj, type) {
  // ignore dots inside escaped symbol
  if (type === "single-quoted") return get(name);

  const parts = name.split(".");

  for (const propertyName of parts) {
    if (hasOwnProperty(obj ?? {}, propertyName)) {
      obj = obj[propertyName];
    } else {
      throw new UnknownPropertyError(propertyName);
    }
  }

  return obj;
}

/**
 * A custom prop function which combines `useOptionalChaining` and `useDotAccessOperator`.
 * The user can use both `foo of bar` and `bar.foo`, both have optional chaining.
 * You can use this function using the following code:
 * ```
 * import {
 *   compileExpression,
 *   useDotAccessOperatorAndOptionalChaining
 * } from 'filtrex'
 *
 * const expr = "foo.bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useDotAccessOperatorAndOptionalChaining
 * });
 *
 * fn({ foo: null }) // → { success: true, value: null }
 * ```
 */
export function useDotAccessOperatorAndOptionalChaining(name, get, obj, type) {
  if (obj === null || obj === undefined) return obj;

  // ignore dots inside escaped symbol
  if (type === "single-quoted") return get(name);

  const parts = name.split(".");

  for (const propertyName of parts) {
    if (obj === null || obj === undefined) {
      return obj;
    } else {
      obj = obj[propertyName];
    }
  }

  return obj;
}

/**
 * A simple, safe, JavaScript expression engine, allowing end-users to enter arbitrary expressions without p0wning you.
 *
 * @example
 * // Input from user (e.g. search filter)
 * let expression = 'transactions <= 5 and abs(profit) > 20.5';
 *
 * // Compile expression to executable function
 * let myfilter = compileExpression(expression);
 *
 * // Execute function
 * myfilter({transactions: 3, profit:-40.5}); // returns { success: true, value: true }
 * myfilter({transactions: 3, profit:-14.5}); // returns { success: true, value: false }
 *
 * @param expression
 * The expression to be parsed. Under the hood, the expression gets compiled to a clean and fast JavaScript function.
 * There are only 2 types: numbers and strings. Numbers may be floating point or integers. Boolean logic is applied
 * on the truthy value of values (e.g. any non-zero number is true, any non-empty string is true, otherwise false).
 * Examples of numbers: `43`, `-1.234`; example of a string: `"hello"`; example of external data variable: `foo`, `a.b.c`,
 * `'foo-bar'`.
 * You can use the following operations:
 *  * `x + y` Add
 *  * `x - y` Subtract
 *  * `x * y` Multiply
 *  * `x / y` Divide
 *  * `x ^ y` Power
 *  * `x mod y` Modulo
 *  * `x == y` Equals
 *  * `x < y` Less than
 *  * `x <= y` Less than or equal to
 *  * `x > y` Greater than
 *  * `x >= y` Greater than or equal to
 *  * `x == y <= z` Chained relation, equivalent to `(x == y and y <= z)`
 *  * `x of y` Get property x of object y
 *  * `x in (a, b, c)` Equivalent to `(x == a or x == b or x == c)`
 *  * `x not in (a, b, c)` Equivalent to `(x != a and x != b and x != c)`
 *  * `x or y` Boolean or
 *  * `x and y` Boolean and
 *  * `not x` Boolean not
 *  * `if x then y else z` If boolean x, value y, else z
 *  * `( x )` Explicity operator precedence
 *  * `( x, y, z )` Array of elements x, y and z
 *  * `abs(x)` Absolute value
 *  * `ceil(x)` Round floating point up
 *  * `floor(x)` Round floating point down
 *  * `log(x)` Natural logarithm
 *  * `log2(x)` Binary logarithm
 *  * `log10(x)` Decadic logarithm
 *  * `max(a, b, c...)` Max value (variable length of args)
 *  * `min(a, b, c...)` Min value (variable length of args)
 *  * `round(x)` Round floating point
 *  * `sqrt(x)` Square root
 *  * `exists(x)` True if `x` is neither `undefined` nor `null`
 *  * `empty(x)` True if `x` doesn't exist, it is an empty string or empty array
 *  * `myFooBarFunction(x)` Custom function defined in `options.extraFunctions`
 */
export function compileExpression(expression, options) {
  // Check and coerce arguments

  if (arguments.length > 2) throw new TypeError("Too many arguments.");

  options = typeof options === "object" ? options : {};

  const knownOptions = [
    "extraFunctions",
    "constants",
    "customProp",
    "operators",
  ];
  let { extraFunctions, constants, customProp, operators } = options;

  for (const key of Object.keys(options))
    if (!knownOptions.includes(key)) throw new UnknownOptionError(key);

  // Functions available to the expression

  let functions = {
    abs: Math.abs,
    ceil: Math.ceil,
    floor: Math.floor,
    log: Math.log,
    log2: Math.log2,
    log10: Math.log10,
    max: Math.max,
    min: Math.min,
    round: Math.round,
    sqrt: Math.sqrt,
    exists: (v) => v !== undefined && v !== null,
    empty: (v) =>
      v === undefined ||
      v === null ||
      v === "" ||
      (Array.isArray(v) && v.length === 0),
  };

  if (extraFunctions) {
    for (const name of Object.keys(extraFunctions)) {
      functions[name] = extraFunctions[name];
    }
  }

  let defaultOperators = {
    "+": (a, b) => numstr(a) + numstr(b),
    "-": (a, b) => (b === undefined ? -num(a) : num(a) - num(b)),
    "*": (a, b) => num(a) * num(b),
    "/": (a, b) => num(a) / num(b),

    "^": (a, b) => Math.pow(num(a), num(b)),
    mod: (a, b) => mod(num(a), num(b)),

    "==": (a, b) => a === b,
    "!=": (a, b) => a !== b,

    "<": (a, b) => num(a) < num(b),
    "<=": (a, b) => num(a) <= num(b),
    ">=": (a, b) => num(a) >= num(b),
    ">": (a, b) => num(a) > num(b),

    "~=": (a, b) => RegExp(str(b)).test(str(a)),
  };

  if (operators) {
    for (const name of Object.keys(operators)) {
      defaultOperators[name] = operators[name];
    }
  }

  operators = defaultOperators;

  constants = constants ?? {};

  // Compile the expression

  let js = flatten(parser.parse(expression));
  js.unshift("return ");
  js.push(";");

  // Metaprogramming functions

  function nakedProp(name, obj, type) {
    if (hasOwnProperty(obj ?? {}, name)) return obj[name];

    throw new UnknownPropertyError(name);
  }

  function safeGetter(obj) {
    return function get(name) {
      if (hasOwnProperty(obj ?? {}, name)) return obj[name];

      throw new UnknownPropertyError(name);
    };
  }

  if (typeof customProp === "function") {
    nakedProp = (name, obj, type) =>
      customProp(name, safeGetter(obj), obj, type);
  }

  function createCall(fns) {
    return function call({ name }, ...args) {
      if (hasOwnProperty(fns, name) && typeof fns[name] === "function")
        return fns[name](...args);

      throw new UnknownFunctionError(name);
    };
  }

  function prop({ name, type }, obj) {
    if (type === "unescaped" && hasOwnProperty(constants, name))
      return constants[name];

    return nakedProp(name, obj, type);
  }

  // Patch together and return

  let func = new Function("call", "ops", "std", "prop", "data", js.join(""));

  return function (data) {
    try {
      return {
        success: true,
        value: func(createCall(functions), operators, std, prop, data),
      };
    } catch (e) {
      return { success: false, reason: e };
    }
  };
}
