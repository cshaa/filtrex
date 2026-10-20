const { compileExpression } = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");
const { expect } = require("chai");

const eval = (str, obj) => {
  const result = compileExpression(str)(obj);
  return result.success ? result.value : result.reason;
};

describe("Strict", () => {
  it("does typechecking for booleans", () => {
    expect(eval("1 == 1 and 1")).is.instanceOf(TypeError);
    expect(eval("1 or 1 != 1")).is.instanceOf(TypeError);
    expect(eval('not "hello"')).is.instanceOf(TypeError);

    expect(eval("not foo", { foo: new Boolean(false) })).equals(true);
  });

  it("does typechecking on addition", () => {
    const data = {
      num: 42,
      str: "hello",
      bool: true,
      date: new Date(Date.UTC(1997, 6, 18)),
      boxedNum: new Number(42),
      boxedStr: new String("hello"),
    };

    expect(eval("num + num", data)).equals(2 * 42);
    expect(eval("str + str", data)).equals("hellohello");
    expect(eval("num + str", data)).equals("42hello");
    expect(eval("str + num", data)).equals("hello42");
    expect(eval('num + "0"', data)).equals("420");

    expect(eval("num + boxedNum", data)).equals(2 * 42);
    expect(eval("boxedNum + num", data)).equals(2 * 42);
    expect(eval("boxedNum + boxedNum", data)).equals(2 * 42);

    expect(eval("str + boxedStr", data)).equals("hellohello");
    expect(eval("boxedStr + str", data)).equals("hellohello");
    expect(eval("boxedStr + boxedStr", data)).equals("hellohello");

    expect(eval("boxedNum + boxedStr", data)).equals("42hello");
    expect(eval("str + boxedNum", data)).equals("hello42");

    expect(eval("num + bool", data)).is.instanceOf(TypeError);
    expect(eval("bool + num", data)).is.instanceOf(TypeError);
    expect(eval("str + bool", data)).is.instanceOf(TypeError);
    expect(eval("bool + str", data)).is.instanceOf(TypeError);
    expect(eval("num + date", data)).is.instanceOf(TypeError);
    expect(eval("date + num", data)).is.instanceOf(TypeError);
    expect(eval("str + date", data)).is.instanceOf(TypeError);
    expect(eval("date + str", data)).is.instanceOf(TypeError);
    expect(eval("bool + date", data)).is.instanceOf(TypeError);
    expect(eval("date + bool", data)).is.instanceOf(TypeError);
    expect(eval("bool + bool", data)).is.instanceOf(TypeError);
    expect(eval("date + date", data)).is.instanceOf(TypeError);
  });

  it("does typechecking on arithmetic operators", () => {});

  it("does strict equality", () => {
    expect(eval("(1 == 1) == 1")).equals(false);
    expect(eval("(1 == 1) != 1")).equals(true);
    expect(eval("(1 != 1) == 0")).equals(false);
    expect(eval("(1 != 1) != 0")).equals(true);

    expect(eval("(1 == 1) == T", { T: true, F: false })).equals(true);
    expect(eval("(1 == 1) != T", { T: true, F: false })).equals(false);
    expect(eval("(1 != 1) == F", { T: true, F: false })).equals(true);
    expect(eval("(1 != 1) != F", { T: true, F: false })).equals(false);

    expect(eval('1 == "1"')).equals(false);
    expect(eval('"1" == 1')).equals(false);
  });
});
