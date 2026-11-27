/**
 * Runtime error – user attempted to call a function
 * which is not a predefined function, nor specified
 * in `options.extraFunctions`.
 *
 * @prop {string} functionName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_FUNCTION'`
 */
export class UnknownFunctionError extends ReferenceError {
  I18N_STRING = "UNKNOWN_FUNCTION";

  constructor(funcName) {
    super(`Unknown function: ${funcName}()`);
    this.functionName = funcName;
  }
}

/**
 * Runtime error – user attempted to access a property which
 * is not present in the `data` object, nor in the `constants`.
 * If the property is meant to be empty, use `undefined` or
 * `null` as its value. If you need to use optional properties
 * in your `data`, define a `customProp` function.
 *
 * @prop {string} propertyName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_PROPERTY'`
 */
export class UnknownPropertyError extends ReferenceError {
  I18N_STRING = "UNKNOWN_PROPERTY";

  constructor(propName) {
    super(`Property “${propName}” does not exist.`);
    this.propertyName = propName;
  }
}

/**
 * Compile time error – you specified an option which
 * was not recognized by Filtrex. Double-check your
 * spelling and the version of Filtrex you are using.
 *
 * @prop {string} keyName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_OPTION'`
 */
export class UnknownOptionError extends TypeError {
  I18N_STRING = "UNKNOWN_OPTION";

  constructor(key) {
    super(`Unknown option: ${key}`);
    this.keyName = key;
  }
}

/**
 * Runtime error – user passed a different type than the one
 * accepted by the function or operator.
 *
 * The possible values of `expectedType` and `recievedType`
 * are: `"undefined"`, `"null"`, `"true"`, `"false"`, `"number"`,
 * `"text"`, `"unknown type"`, `"list"`, `"object"`, `"text or number"`
 * and `"logical value (“true” or “false”)"`
 *
 * @prop {string} expectedType
 * @prop {string} recievedType
 * @prop {string} I18N_STRING has the value `'UNEXPECTED_TYPE'`
 */
export class UnexpectedTypeError extends TypeError {
  I18N_STRING = "UNEXPECTED_TYPE";

  constructor(expected, got) {
    super(`Expected a ${expected}, but got a ${got} instead.`);

    this.expectedType = expected;
    this.recievedType = got;
  }
}

/**
 * Compile time error – the expression contains unrecognized text or a token
 * that is not valid in the current parser state.
 *
 * @prop {string} I18N_STRING – 'UNRECOGNIZED_TEXT' or 'UNEXPECTED_TOKEN'
 * @prop {number} line – one-based line number
 * @prop {string | null} token – unexpected parser token, or null for a lexical error
 * @prop {string[]} expected – valid parser tokens, empty for a lexical error
 */
export class ExpressionParseError extends Error {
  constructor(message, { token, line, expected = [] }) {
    super(message);
    this.I18N_STRING =
      token === null ? "UNRECOGNIZED_TEXT" : "UNEXPECTED_TOKEN";
    this.line = line + 1;
    this.token = token === null ? null : String(token);
    // Jison wraps its token names in single quotes for the English message.
    this.expected = expected.map((name) => name.slice(1, -1));
  }
}

/**
 * An internal error. This was not meant to happen, please report
 * at https://github.com/cshaa/filtrex/
 *
 * @prop {string} I18N_STRING has the value `'INTERNAL'`
 */
export class InternalError extends Error {
  I18N_STRING = "INTERNAL";

  constructor(message) {
    super(message);
  }
}
