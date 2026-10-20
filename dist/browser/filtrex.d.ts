export type FiltrexResult =
  | { success: true; value: any }
  | { success: false; reason: any };

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
 *  * `if x then y else z` If boolean x is true, return value y, else return z
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
export function compileExpression(
  expression: string,
  options?: Options,
): (obj: any) => FiltrexResult;

export interface Options {
  /**
   * When integrating in to your application, you can add your own custom functions.
   * These functions will be available in the expression in the same way as `sqrt(x)` and `round(x)`.
   */
  extraFunctions?: {
    [T: string]: Function;
  };

  /**
   * Pass constants like `pi` or `true` to the expression without having to modify data.
   * These constants will shadow identically named properties on the data object. In order
   * to access `data.pi` instead of `constants.pi`, for example, use a single-quoted
   * symbol in your expression, ie. `'pi'` instead of just `pi`.
   */
  constants?: {
    [T: string]: any;
  };

  /**
   * If you want to do some more magic with your expression, you can supply a custom function
   * that will resolve the identifiers used in the expression and assign them a value yourself.
   *
   * **Safety note**: The `get` function returns `undefined` for properties that are defined on
   * the object's prototype, not on the object itself. This is important, because otherwise the user
   * could access things like `toString.constructor` and maybe do some nasty things with it. Bear
   * this in mind if you decide not to use `get` and access the properties yourself.
   *
   * @param name - name of the property being accessed
   * @param get - safe getter that retrieves the property from obj
   * @param obj - the object passed to compiled expression
   *
   * @example
   * function containsWord(string, word) {
   *   // your optimized code
   * }
   *
   * let myfilter = compileExpression('Bob and Alice or Cecil', {
   *   customProp: (word, _, string) => containsWord(string, word)
   * });
   *
   * myfilter("Bob is boring"); // returns { success: true, value: false }
   * myfilter("Bob met Alice"); // returns { success: true, value: true }
   * myfilter("Cecil is cool"); // returns { success: true, value: true }
   */
  customProp?: (
    name: string,
    get: (name: string) => any,
    object: any,
    type: "unescaped" | "single-quoted",
  ) => any;

  /**
   * This option lets you override operators like `+` and `>=` with custom functions.
   */
  operators?: Operators;
}

export interface Operators {
  "+"?: (a: any, b: any) => any;
  "-"?: (a: any, b?: any) => any;
  "*"?: (a: any, b: any) => any;
  "/"?: (a: any, b: any) => any;

  "%"?: (a: any, b: any) => any;
  "^"?: (a: any, b: any) => any;

  "==": (a: any, b: any) => boolean;
  "!=": (a: any, b: any) => boolean;

  "<"?: (a: any, b: any) => boolean;
  ">="?: (a: any, b: any) => boolean;
  "<="?: (a: any, b: any) => boolean;
  ">"?: (a: any, b: any) => boolean;

  "~="?: (a: any, b: any) => boolean;
}

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
export function useOptionalChaining(
  name: string,
  get: (name: string) => any,
  object: any,
  type: "unescaped" | "single-quoted",
);

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
export function useDotAccessOperator(
  name: string,
  get: (name: string) => any,
  object: any,
  type: "unescaped" | "single-quoted",
);

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
export function useDotAccessOperatorAndOptionalChaining(
  name: string,
  get: (name: string) => any,
  object: any,
  type: "unescaped" | "single-quoted",
);
