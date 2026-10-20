const { compileExpression } = require("../dist/cjs/filtrex");

const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Object support", () => {
  it("can bind to data", () => {
    const something = compileExpression("1 + foo * bar");

    expect(something({ foo: 5, bar: 2 }).value).equals(11);
    expect(something({ foo: 2, bar: 1 }).value).equals(3);
  });

  it("includes symbols with dots", () => {
    expect(
      compileExpression("hello.world.foo")({ "hello.world.foo": 123 }).value,
    ).equals(123);
    expect(
      compileExpression("order.gooandstuff")({ "order.gooandstuff": 123 })
        .value,
    ).equals(123);
  });

  it("includes quoted symbols", () => {
    expect(
      compileExpression("'hello-world-foo'")({ "hello-world-foo": 123 }).value,
    ).equals(123);
    expect(
      compileExpression("'order+goo*and#stuff'")({
        "order+goo*and#stuff": 123,
      }).value,
    ).equals(123);
  });

  it("includes symbols with $ and _", () => {
    expect(compileExpression("$_.0$$")({ "$_.0$$": 123 }).value).equals(123);
  });

  it("includes object property accessors", () => {
    expect(
      compileExpression(
        `hat of 'the captain' of Danube.Steamboat.Shipping.Company`,
      )({
        "Danube.Steamboat.Shipping.Company": { "the captain": { hat: "epic" } },
      }).value,
    ).equals("epic");

    expect(
      compileExpression("something of nothing")({ nothing: undefined }).reason,
    ).is.instanceOf(ReferenceError);
    expect(
      compileExpression("toString of something")({ something: {} }).reason,
    ).is.instanceOf(ReferenceError);
  });
});
