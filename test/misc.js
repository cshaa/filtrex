const {
  compileExpression,
  useDotAccessOperator,
  useOptionalChaining,
  useDotAccessOperatorAndOptionalChaining,
} = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");

const chai = require("chai");
const assertArrays = require("chai-arrays");

chai.use(assertArrays);
const { expect } = chai;

const eval = (str, obj) => {
  const result = compileExpression(str)(obj);
  return result.success ? result.value : result.reason;
};

describe("Various other things", () => {
  it("in / not in", () => {
    // value in array
    expect(eval("5 in (1, 2, 3, 4)")).equals(false);
    expect(eval("3 in (1, 2, 3, 4)")).equals(true);
    expect(eval("5 not in (1, 2, 3, 4)")).equals(true);
    expect(eval("3 not in (1, 2, 3, 4)")).equals(false);

    // array in array
    expect(eval("(1, 2) in (1, 2, 3)")).equals(true);
    expect(eval("(1, 2) in (2, 3, 1)")).equals(true);
    expect(eval("(3, 4) in (1, 2, 3)")).equals(false);
    expect(eval("(1, 2) not in (1, 2, 3)")).equals(false);
    expect(eval("(1, 2) not in (2, 3, 1)")).equals(false);
    expect(eval("(3, 4) not in (1, 2, 3)")).equals(true);

    // other edge cases
    expect(eval("(1, 2) in 1")).equals(false);
    expect(eval("1 in 1")).equals(true);
    expect(eval("(1, 2) not in 1")).equals(true);
    expect(eval("1 not in 1")).equals(false);
  });

  it("string support", () => {
    expect(eval('foo == "hello"', { foo: "hello" })).equals(true);
    expect(eval('foo == "hello"', { foo: "bye" })).equals(false);
    expect(eval('foo != "hello"', { foo: "hello" })).equals(false);
    expect(eval('foo != "hello"', { foo: "bye" })).equals(true);
    expect(eval('foo in ("aa", "bb")', { foo: "aa" })).equals(true);
    expect(eval('foo in ("aa", "bb")', { foo: "cc" })).equals(false);
    expect(eval('foo not in ("aa", "bb")', { foo: "aa" })).equals(false);
    expect(eval('foo not in ("aa", "bb")', { foo: "cc" })).equals(true);

    expect(eval(`"\n"`)).equals("\n");
    expect(eval(`"\u0000"`)).equals("\u0000");
    expect(eval(`"\uD800"`)).equals("\uD800");
  });

  it("regexp support", () => {
    expect(eval('foo ~= "^[hH]ello"', { foo: "hello" })).equals(true);
    expect(eval('foo ~= "^[hH]ello"', { foo: "bye" })).equals(false);
  });

  it("array support", () => {
    const arr = eval('(42, "fifty", pi)', { pi: Math.PI });

    expect(arr).is.array();
    expect(arr).to.be.equalTo([42, "fifty", Math.PI]);
  });

  it("ternary operator", () => {
    expect(eval("if 1 > 2 then 3 else 4")).equals(4);
    expect(eval("if 1 < 2 then 3 else 4")).equals(3);

    expect(
      eval(
        "if 1 < 2 then if 3 < 4 then 42 else 420 else if 5 < 6 then 69 else -1/12",
      ),
    ).equals(42);
    expect(
      eval(
        "if 1 < 2 then if 3 > 4 then 42 else 420 else if 5 < 6 then 69 else -1/12",
      ),
    ).equals(420);
    expect(
      eval(
        "if 1 > 2 then if 3 < 4 then 42 else 420 else if 5 < 6 then 69 else -1/12",
      ),
    ).equals(69);
    expect(
      eval(
        "if 1 > 2 then if 3 < 4 then 42 else 420 else if 5 > 6 then 69 else -1/12",
      ),
    ).equals(-1 / 12);
  });

  it("kitchensink", () => {
    var kitchenSink = compileExpression(
      "if 4 > lowNumber * 2 and (max(a, b) < 20 or foo) then 1.1 else 9.4",
    );
    expect(
      kitchenSink({ lowNumber: 1.5, a: 10, b: 12, foo: false }).value,
    ).equals(1.1);
    expect(
      kitchenSink({ lowNumber: 3.5, a: 10, b: 12, foo: false }).value,
    ).equals(9.4);
  });

  it("custom functions", () => {
    let triple = (x) => x * 3;
    let options = { extraFunctions: { triple } };
    expect(compileExpression("triple(v)", options)({ v: 7 }).value).equals(21);
  });

  it("custom property function basics", () => {
    expect(
      compileExpression("a", { customProp: (name) => name === "a" })().value,
    ).equals(true);

    expect(
      compileExpression("a + bb + ccc", {
        customProp: (name) => name.length,
      })().value,
    ).equals(6);

    expect(
      compileExpression("a + b * c", { customProp: (name, get) => get(name) })({
        a: 1,
        b: 2,
        c: 3,
      }).value,
    ).equals(7);

    expect(
      compileExpression("a", { customProp: (name, get) => get(name) })({
        a: true,
      }).value,
    ).equals(true);

    let object = { a: 2 };
    expect(
      compileExpression("a", { customProp: (_, __, obj) => obj === object })(
        object,
      ).value,
    ).equals(true);
  });

  it("custom property function text search", () => {
    let textToSearch =
      "able was i ere I saw elba\nthe Rain in spain falls MAINLY on the plain";
    let doesTextMatch = (name) => textToSearch.indexOf(name) !== -1;
    let evalProp = (exp) => {
      const result = compileExpression(exp, { customProp: doesTextMatch })();
      return result.success ? result.value : result.reason;
    };

    expect(evalProp("able and was and i")).equals(true);
    expect(evalProp("able and was and dog")).equals(false);
    expect(evalProp("able or dog")).equals(true);
    expect(evalProp("able")).equals(true);
    expect(evalProp("Rain and (missing or MAINLY)")).equals(true);
    expect(evalProp("NotThere or missing or falls and plain")).equals(true);
  });

  it("custom property function proxy", () => {
    let prefixedName = (str, sub) =>
      str.substr(0, sub.length) === sub && str.substr(sub.length);
    let tripleName = (str) => prefixedName(str, "triple_");

    let proxy = (name, get) =>
      tripleName(name) ? 3 * get(tripleName(name)) : get(name);
    let evalProp = (exp) => {
      const result = compileExpression(exp, { customProp: proxy })({
        a: 1,
        b: 2,
        c: 3,
      });
      return result.success ? result.value : result.reason;
    };

    expect(evalProp("a")).equals(1);
    expect(evalProp("triple_a")).equals(3);
    expect(evalProp("a + triple_b * c")).equals(19);
  });

  it("throws when using old API", () => {
    let extraFunctions = { myCustomFunc: (n) => n * n };
    let customProp = () => "foo";

    expect(() => compileExpression("", extraFunctions)).throws();
    expect(() => compileExpression("", {}, customProp)).throws();
    expect(() => compileExpression("", extraFunctions, customProp)).throws();
  });

  it("doesn't recognise non-callable values as extra functions", () => {
    let options = { extraFunctions: { sqrt: undefined, a: 42, b: {} } };
    let eval = (str) => {
      const result = compileExpression(str, options)();
      return result.success ? result.value : result.reason;
    };

    expect(eval("a()")).is.instanceOf(ReferenceError);
    expect(eval("b()")).is.instanceOf(ReferenceError);

    let err = eval("sqrt(4)");
    expect(err).is.instanceOf(ReferenceError);
    expect(err.message).equals("Unknown function: sqrt()");
  });

  it('gives the correct precedence to "in" and "not in"', () => {
    expect(eval("4 + 3 in (7, 8)")).equals(true);
    expect(eval("4 + 3 in (6, 8)")).equals(false);
    expect(eval("4 + 3 not in (7, 8)")).equals(false);
    expect(eval("4 + 3 not in (6, 8)")).equals(true);
  });

  it("constants basics", () => {
    const options = { constants: { pi: Math.PI, true: true, false: false } };

    expect(
      compileExpression("2 * pi * radius", options)({ radius: 6 }).value,
    ).equals(2 * Math.PI * 6);

    expect(
      compileExpression("not true == false and not false == true", options)()
        .value,
    ).equals(true);

    expect(compileExpression("pi", options)({ pi: 3 }).value).equals(Math.PI);

    expect(compileExpression(`'pi'`, options)({ pi: 3 }).value).equals(3);

    const options2 = { constants: { a: "a_const " } };
    const data = { a: "a_data ", b: "b_data " };
    const expr = `'a' + a + 'b' + b`;

    expect(compileExpression(expr, options2)(data).value).equals(
      "a_data a_const b_data b_data ",
    );
  });

  it("deprecated syntax still works", () => {
    expect(eval("10 % 2")).equals(0);
    expect(eval("11 % 2")).equals(1);
    expect(eval("-1 % 2")).equals(1);
    expect(eval("-0.1 % 5")).equals(4.9);

    expect(eval("1 < 2 ? 3 < 4 ? 42 : 420 : 5 < 6 ? 69 : -1/12")).equals(42);
    expect(eval("1 < 2 ? 3 > 4 ? 42 : 420 : 5 < 6 ? 69 : -1/12")).equals(420);
    expect(eval("1 > 2 ? 3 < 4 ? 42 : 420 : 5 < 6 ? 69 : -1/12")).equals(69);
    expect(eval("1 > 2 ? 3 < 4 ? 42 : 420 : 5 > 6 ? 69 : -1/12")).equals(
      -1 / 12,
    );
  });

  it("useDotAccessOperator works", () => {
    const expr = "foo.bar";

    const fn = compileExpression(expr, {
      customProp: useDotAccessOperator,
    });

    expect(fn({ foo: { bar: 42 } }).value).equals(42);
  });

  it("useOptionalChaining work", () => {
    const expr = "bar of foo";

    const fn = compileExpression(expr, {
      customProp: useOptionalChaining,
    });

    expect(fn({ foo: null }).value).equals(null);
    expect(fn({ foo: { bar: 42 } }).value).equals(42);
  });

  it("useDotAccessOperatorAndOptionalChaining works", () => {
    const expr1 = "foo.bar";
    const expr2 = "bar of foo";
    const options = {
      customProp: useDotAccessOperatorAndOptionalChaining,
    };

    const fn1 = compileExpression(expr1, options);
    const fn2 = compileExpression(expr2, options);

    expect(fn1({ foo: null }).value).equals(null);
    expect(fn1({ foo: { bar: 42 } }).value).equals(42);
    expect(fn2({ foo: null }).value).equals(null);
    expect(fn2({ foo: { bar: 42 } }).value).equals(42);
  });
});

describe("Result return values", () => {
  it("wraps successful values, including falsy values and errors", () => {
    const fn = compileExpression("value");
    const values = [
      42,
      true,
      false,
      0,
      "",
      null,
      undefined,
      [1, 2],
      { a: 1 },
      new Error("value"),
    ];

    for (const value of values) {
      const result = fn({ value });
      expect(result).to.deep.equal({ success: true, value });
      expect(result.value).equals(value);
    }
  });

  it("returns an UnknownPropertyError as the failure reason", () => {
    const result = compileExpression("missing == 1")({ a: 1 });

    expect(result).to.have.all.keys("success", "reason");
    expect(result.success).equals(false);
    expect(result.reason).is.instanceOf(ReferenceError);
    expect(result.reason.constructor.name).equals("UnknownPropertyError");
    expect(result.reason.I18N_STRING).equals("UNKNOWN_PROPERTY");
    expect(result.reason.propertyName).equals("missing");
  });

  it("returns a failure for a wrong-type operation", () => {
    const result = compileExpression("1 + value")({ value: true });

    expect(result).to.have.all.keys("success", "reason");
    expect(result.success).equals(false);
    expect(result.reason).is.instanceOf(TypeError);
    expect(result.reason.I18N_STRING).equals("UNEXPECTED_TYPE");
  });

  it("never throws runtime errors, even non-Error values", () => {
    for (const reason of [
      new Error("failure"),
      "failure",
      null,
      undefined,
      false,
      0,
    ]) {
      const fn = compileExpression("fail()", {
        extraFunctions: {
          fail: () => {
            throw reason;
          },
        },
      });
      let result;

      expect(() => {
        result = fn({});
      }).does.not.throw();
      expect(result).to.deep.equal({ success: false, reason });
      expect(result.reason).equals(reason);
    }
  });

  it("still throws compile-time errors for malformed expressions and bad options", () => {
    expect(() => compileExpression("1 +")).throws();
    expect(() => compileExpression("1", { unknown: true })).throws(
      TypeError,
      "Unknown option: unknown",
    );
  });

  it("does not keep failed expressions when filtering by their value", () => {
    const fn = compileExpression("missing == 1");
    expect([{ a: 1 }].filter((obj) => fn(obj).value)).to.deep.equal([]);
    expect(compileExpression("nonexisting")({}).success).equals(false);
  });
});
