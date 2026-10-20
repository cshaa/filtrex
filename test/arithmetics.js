const { compileExpression } = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");
const { expect } = require("chai");

const eval = (str, obj) => {
  const result = compileExpression(str)(obj);
  return result.success ? result.value : result.reason;
};

describe("Arithmetics", () => {
  it("can do simple numeric expressions", () => {
    expect(eval("1 + 2 * 3")).equals(7);
    expect(eval("2 * 3 + 1")).equals(7);
    expect(eval("1 + (2 * 3)")).equals(7);
    expect(eval("(1 + 2) * 3")).equals(9);
    expect(eval("((1 + 2) * 3 / 2 + 1 - 4 + 2 ^ 3) * -2")).equals(-19);
    expect(eval("1.4 * 1.1")).equals(1.54);
    expect(eval("97 mod 10")).equals(7);
    expect(eval("2 * 3 ^ 2")).equals(18);
  });

  it("does math functions", () => {
    expect(eval("abs(-5)")).equals(5);
    expect(eval("abs(5)")).equals(5);
    expect(eval("ceil(4.1)")).equals(5);
    expect(eval("ceil(4.6)")).equals(5);
    expect(eval("floor(4.1)")).equals(4);
    expect(eval("floor(4.6)")).equals(4);
    expect(eval("round(4.1)")).equals(4);
    expect(eval("round(4.6)")).equals(5);
    expect(eval("sqrt(9)")).equals(3);
  });

  it("supports functions with multiple args", () => {
    expect(eval("min()")).equals(Infinity);
    expect(eval("min(2)")).equals(2);
    expect(eval("max(2)")).equals(2);
    expect(eval("min(2, 5)")).equals(2);
    expect(eval("max(2, 5)")).equals(5);
    expect(eval("min(2, 5, 6)")).equals(2);
    expect(eval("max(2, 5, 6)")).equals(6);
    expect(eval("min(2, 5, 6, 1)")).equals(1);
    expect(eval("max(2, 5, 6, 1)")).equals(6);
    expect(eval("min(2, 5, 6, 1, 9)")).equals(1);
    expect(eval("max(2, 5, 6, 1, 9)")).equals(9);
    expect(eval("min(2, 5, 6, 1, 9, 12)")).equals(1);
    expect(eval("max(2, 5, 6, 1, 9, 12)")).equals(12);
  });

  it("can do comparisons", () => {
    expect(eval("foo == 4", { foo: 4 })).equals(true);
    expect(eval("foo == 4", { foo: 3 })).equals(false);
    expect(eval("foo == 4", { foo: -4 })).equals(false);
    expect(eval("foo != 4", { foo: 4 })).equals(false);
    expect(eval("foo != 4", { foo: 3 })).equals(true);
    expect(eval("foo != 4", { foo: -4 })).equals(true);
    expect(eval("foo > 4", { foo: 3 })).equals(false);
    expect(eval("foo > 4", { foo: 4 })).equals(false);
    expect(eval("foo > 4", { foo: 5 })).equals(true);
    expect(eval("foo >= 4", { foo: 3 })).equals(false);
    expect(eval("foo >= 4", { foo: 4 })).equals(true);
    expect(eval("foo >= 4", { foo: 5 })).equals(true);
    expect(eval("foo < 4", { foo: 3 })).equals(true);
    expect(eval("foo < 4", { foo: 4 })).equals(false);
    expect(eval("foo < 4", { foo: 5 })).equals(false);
    expect(eval("foo <= 4", { foo: 3 })).equals(true);
    expect(eval("foo <= 4", { foo: 4 })).equals(true);
    expect(eval("foo <= 4", { foo: 5 })).equals(false);
  });

  it("can do chained comparisons", () => {
    expect(eval("1 == 1 == 1")).equals(true);
    expect(eval("1 == 1 != 2")).equals(true);
    expect(eval("1 != 2 != 1")).equals(true);
    expect(eval("1 < 2 <= 2 < 3")).equals(true);
    expect(eval("1 != 1 == 1")).equals(false);
    expect(eval("1 <= 1 > 1")).equals(false);
    expect(eval('"a" == "a" != "b"')).equals(true);
    expect(eval('"abc" == "abc" ~= "a.c" == "a.c" != "abc"')).equals(true);
  });

  it("can do boolean logic", () => {
    const obj = { T: true, F: false };

    expect(eval("F and F", obj)).equals(false);
    expect(eval("F and T", obj)).equals(false);
    expect(eval("T and F", obj)).equals(false);
    expect(eval("T and T", obj)).equals(true);
    expect(eval("F or F", obj)).equals(false);
    expect(eval("F or T", obj)).equals(true);
    expect(eval("T or F", obj)).equals(true);
    expect(eval("T or T", obj)).equals(true);
    expect(eval("not F", obj)).equals(true);
    expect(eval("not T", obj)).equals(false);
    expect(eval("(F and T) or T", obj)).equals(true);
    expect(eval("F and (T or T)", obj)).equals(false);
    expect(eval("F and T or T", obj)).equals(true);
    expect(eval("T or T and F", obj)).equals(true);
    expect(eval("not T and F", obj)).equals(false);
  });

  it("does modulo correctly", () => {
    expect(eval("10 mod 2")).equals(0);
    expect(eval("11 mod 2")).equals(1);
    expect(eval("-1 mod 2")).equals(1);
    expect(eval("-0.1 mod 5")).equals(4.9);
  });

  it("exponentiation has precedence over unary minus", () => {
    expect(eval("-x^2", { x: 2 })).equals(-4);
  });

  it("exponentiation is right-associative", () => {
    expect(eval("5^3^2")).equals(5 ** (3 ** 2));
  });
});
