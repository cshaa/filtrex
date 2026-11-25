const assert = require("node:assert/strict");
const { describe, it } = require("mocha");
const { compileExpression } = require("..");

describe("Translatable parser errors", () => {
  it("reports the unexpected token and expected tokens", () => {
    assert.throws(() => compileExpression("1 +\n  )"), {
      message: /^Parse error on line/,
      I18N_STRING: "UNEXPECTED_TOKEN",
      line: 2,
      token: ")",
      expected: ["-", "not", "if", "(", "Number", "Symbol", "String"],
    });
  });

  it("reports the end of an incomplete expression as a token", () => {
    assert.throws(() => compileExpression("1 +"), {
      I18N_STRING: "UNEXPECTED_TOKEN",
      line: 1,
      token: "EndOfExpression",
    });
  });

  it("distinguishes input the lexer cannot recognize", () => {
    assert.throws(() => compileExpression("1 +\n  @"), {
      message: /^Lexical error on line 2/,
      I18N_STRING: "UNRECOGNIZED_TEXT",
      line: 2,
      token: null,
      expected: [],
    });
  });

  it("does not reclassify option or evaluation errors", () => {
    assert.throws(() => compileExpression("1", { invalid: true }), {
      I18N_STRING: "UNKNOWN_OPTION",
    });
    assert.equal(
      compileExpression("missing")({}).I18N_STRING,
      "UNKNOWN_PROPERTY",
    );
    assert.equal(compileExpression("1 + 2")({}), 3);
  });
});
