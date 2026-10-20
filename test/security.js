const { compileExpression } = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Security", () => {
  it("cannot access prototype symbols of data", () =>
    expect(compileExpression("toString")({}).reason).is.instanceOf(
      ReferenceError,
    ));

  // !FIXME this doesn't seem relevant anymore

  it("cannot call prototype methods on function table", () => {
    // Credit to @emilvirkki for finding this
    global.p0wned = false;

    let evil = compileExpression(
      'constructor.constructor.name.replace("",constructor.constructor("global.p0wned=true"))',
    );

    expect(evil().reason).is.instanceOf(Error);

    expect(global.p0wned).equals(false);
  });

  it("cannot access properties of the data prototype", () =>
    expect(
      compileExpression("a")(Object.create({ a: 42 })).reason,
    ).is.instanceOf(ReferenceError));

  it("cannot inject single-quoted names with double quotes", () => {
    global.p0wned = false;

    let evil = compileExpression(`'"+(global.p0wned = true)+"'`);
    let object = { '"+(global.p0wned = true)+"': 31 };

    expect(evil(object).value).equals(31);
    expect(global.p0wned).equals(false);

    expect(
      compileExpression("'undefined:(global.p0wned=true)));((true?(x=>x)'()", {
        extraFunctions: {
          "undefined:(global.p0wned=true)));((true?(x=>x)": () => 42,
        },
      })().value,
    ).equals(42);

    expect(global.p0wned).equals(false);
  });

  it("does backslash and quote escaping", () => {
    expect(compileExpression(`"\\\\"`)({}).value).equals(`\\`);
    expect(compileExpression(`"\\\\" + '\\\\'`)({ "\\": "good" }).value).equals(
      `\\good`,
    );
    expect(
      compileExpression(`"\\"\\\\" + '\\'\\\\'`)({ "'\\": "good" }).value,
    ).equals(`"\\good`);

    // Invalid escape sequences:
    expect(() => compileExpression(`'\\'`)).throws();
    expect(() => compileExpression(`"\\"`)).throws();
    expect(() => compileExpression(`"a\\"`)).throws();
    expect(() =>
      compileExpression(`"a\\" == "; global.p0wned = true; //"`),
    ).throws();

    // JS escape sequences other than \" and \\ are not allowed in Filtrex strings:
    expect(() => compileExpression(`"\\r"`)).throws();
    expect(() => compileExpression(`"\\n"`)).throws();
    expect(() => compileExpression(`"\\x13"`)).throws();
    expect(() => compileExpression(`"\\u0013"`)).throws();

    expect(global.p0wned).equals(false);
  });

  it("in() is not vulnerable to Object.prototype extensions ", () => {
    Object.prototype.aa = true;
    expect(compileExpression('"aa" in ("bb", "cc")')().value).equals(false);
    delete Object.prototype.aa;
  });

  it("blocks prototype access in custom property function", () => {
    expect(
      compileExpression("a", { customProp: (name, get) => get(name) })(
        Object.create({ a: 1 }),
      ).reason,
    ).is.instanceOf(ReferenceError);
  });

  it("supports double quotes inside strings", () => {
    expect(compileExpression('"\\"test\\""')({}).value).equals('"test"');
  });

  it("cannot throw an error", () => {
    let options = {
      extraFunctions: {
        throw: () => {
          throw new Error();
        },
      },
    };
    let f = compileExpression("throw()", options);
    expect(f).does.not.throw();
    expect(f().reason).is.instanceOf(Error);
  });
});
