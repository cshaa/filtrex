const { compileExpression } = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");

const chai = require("chai");
const assertArrays = require("chai-arrays");

chai.use(assertArrays);
const { expect } = chai;

const eval = (str, obj) => {
  const result = compileExpression(str)(obj);
  return result.success ? result.value : result.reason;
};

const numbers = [
  { a: 1, b: 2, c: 3, d: 4 },

  { a: 0, b: 0, c: 0, d: 0 },
  { a: 0, b: 0, c: 0, d: 1 },
  { a: 0, b: 0, c: 1, d: 0 },
  { a: 0, b: 0, c: 1, d: 1 },
  { a: 0, b: 1, c: 0, d: 0 },
  { a: 0, b: 1, c: 0, d: 1 },
  { a: 0, b: 1, c: 1, d: 0 },
  { a: 0, b: 1, c: 1, d: 1 },
  { a: 1, b: 0, c: 0, d: 0 },
  { a: 1, b: 0, c: 0, d: 1 },
  { a: 1, b: 0, c: 1, d: 0 },
  { a: 1, b: 0, c: 1, d: 1 },
  { a: 1, b: 1, c: 0, d: 0 },
  { a: 1, b: 1, c: 0, d: 1 },
  { a: 1, b: 1, c: 1, d: 0 },
  { a: 1, b: 1, c: 1, d: 1 },

  { a: 48.63, b: -96e-4, c: 3.142, d: -2.1 },
];

const booleans = [
  { a: !!0, b: !!0, c: !!0, d: !!0 },
  { a: !!0, b: !!0, c: !!0, d: !!1 },
  { a: !!0, b: !!0, c: !!1, d: !!0 },
  { a: !!0, b: !!0, c: !!1, d: !!1 },
  { a: !!0, b: !!1, c: !!0, d: !!0 },
  { a: !!0, b: !!1, c: !!0, d: !!1 },
  { a: !!0, b: !!1, c: !!1, d: !!0 },
  { a: !!0, b: !!1, c: !!1, d: !!1 },
  { a: !!1, b: !!0, c: !!0, d: !!0 },
  { a: !!1, b: !!0, c: !!0, d: !!1 },
  { a: !!1, b: !!0, c: !!1, d: !!0 },
  { a: !!1, b: !!0, c: !!1, d: !!1 },
  { a: !!1, b: !!1, c: !!0, d: !!0 },
  { a: !!1, b: !!1, c: !!0, d: !!1 },
  { a: !!1, b: !!1, c: !!1, d: !!0 },
  { a: !!1, b: !!1, c: !!1, d: !!1 },
];

describe("Operator precedence", () => {
  it("Ternary has lowest precedence", () => {
    for (const data of numbers) {
      const { a, b, c, d } = data;

      expect(eval(`if a < b then c else d`, data)).eql(a < b ? c : d);
      expect(eval(`if a > b then c else d`, data)).eql(a > b ? c : d);
      expect(eval(`if a <= b then c else d`, data)).eql(a <= b ? c : d);
      expect(eval(`if a >= b then c else d`, data)).eql(a >= b ? c : d);
      expect(eval(`if a == b then c else d`, data)).eql(a == b ? c : d);

      expect(eval(`if a != 0 then b else c + d`, data)).eql(a ? b : c + d);
      expect(eval(`if a != 0 then b else c - d`, data)).eql(a ? b : c - d);
      expect(eval(`if a != 0 then b else c * d`, data)).eql(a ? b : c * d);
      expect(eval(`if a != 0 then b else c / d`, data)).eql(a ? b : c / d);
      expect(eval(`if a != 0 then b else c % d`, data)).eql(a ? b : c % d);
      expect(eval(`if a != 0 then b else c ^ d`, data)).eql(a ? b : c ** d);
      expect(eval(`if a != 0 then b else c < d`, data)).eql(a ? b : c < d);
      expect(eval(`if a != 0 then b else c > d`, data)).eql(a ? b : c > d);
      expect(eval(`if a != 0 then b else c <= d`, data)).eql(a ? b : c <= d);
      expect(eval(`if a != 0 then b else c >= d`, data)).eql(a ? b : c >= d);
      expect(eval(`if a != 0 then b else c == d`, data)).eql(a ? b : c == d);
    }

    for (const data of booleans) {
      const { a, b, c, d } = data;

      expect(eval(`if not a then b else c`, data)).eql(!a ? b : c);
      expect(eval(`if a or b then c else d`, data)).eql(a || b ? c : d);
      expect(eval(`if a and b then c else d`, data)).eql(a && b ? c : d);
      expect(eval(`if a == b then c else d`, data)).eql(a == b ? c : d);

      expect(eval(`if a then b else not c`, data)).eql(a ? b : !c);
      expect(eval(`if a then b else c == d`, data)).eql(a ? b : c == d);
      expect(eval(`if a then b else c or d`, data)).eql(a ? b : c || d);
      expect(eval(`if a then b else c and d`, data)).eql(a ? b : c && d);

      expect(eval(`if not a == b then c else d`, data)).eql(!a == b ? c : d);
      expect(eval(`if a == not b then c else d`, data)).eql(a == !b ? c : d);
      expect(eval(`if not a == not b then c else d`, data)).eql(
        !a == !b ? c : d,
      );
    }
  });

  it("PEMDAS", () => {
    for (const data of numbers) {
      const { a, b, c, d } = data;

      expect(eval(`a + b * c ^ d`, data)).eql(a + b * c ** d);
      expect(eval(`a + b ^ c * d`, data)).eql(a + b ** c * d);
      expect(eval(`a ^ b + c * d`, data)).eql(a ** b + c * d);
      expect(eval(`a ^ b * c + d`, data)).eql(a ** b * c + d);
      expect(eval(`a * b ^ c + d`, data)).eql(a * b ** c + d);
      expect(eval(`a * b + c ^ d`, data)).eql(a * b + c ** d);

      expect(eval(`a - b / c ^ d`, data)).eql(a - b / c ** d);
      expect(eval(`a - b ^ c / d`, data)).eql(a - b ** c / d);
      expect(eval(`a ^ b - c / d`, data)).eql(a ** b - c / d);
      expect(eval(`a ^ b / c - d`, data)).eql(a ** b / c - d);
      expect(eval(`a / b ^ c - d`, data)).eql(a / b ** c - d);
      expect(eval(`a / b - c ^ d`, data)).eql(a / b - c ** d);

      expect(eval(`-a + -b * -c ^ -d`, data)).eql(-a + -b * -(c ** -d));
      expect(eval(`-a + -b ^ -c * -d`, data)).eql(-a + -(b ** -c * -d));
      expect(eval(`-a ^ -b + -c * -d`, data)).eql(-(a ** -b) + -c * -d);
      expect(eval(`-a ^ -b * -c + -d`, data)).eql(-(a ** -b) * -c + -d);
      expect(eval(`-a * -b ^ -c + -d`, data)).eql(-a * -(b ** -c) + -d);
      expect(eval(`-a * -b + -c ^ -d`, data)).eql(-a * -b + -(c ** -d));

      expect(eval(`-a - -b / -c ^ -d`, data)).eql(-a - -b / -(c ** -d));
      expect(eval(`-a - -b ^ -c / -d`, data)).eql(-a - -(b ** -c / -d));
      expect(eval(`-a ^ -b - -c / -d`, data)).eql(-(a ** -b) - -c / -d);
      expect(eval(`-a ^ -b / -c - -d`, data)).eql(-(a ** -b) / -c - -d);
      expect(eval(`-a / -b ^ -c - -d`, data)).eql(-a / -(b ** -c) - -d);
      expect(eval(`-a / -b - -c ^ -d`, data)).eql(-a / -b - -(c ** -d));
    }
  });
});
