const { compileExpression } = require("../lib/filtrex");

const { describe, it } = require("mocha");

const chai = require("chai");
const assertArrays = require('chai-arrays');

chai.use(assertArrays);
const { expect } = chai;


function deepGet(root, path) {
  try {
      if (path in root) return root[path];
      if (Array.isArray(path)) path = "['" + path.join("']['") + "']";
      let obj = root;
      path.replace(
        /\[\s*(['"])(.*?)\1\s*\]|^\s*(\w+)\s*(?=\.|\[|$)|\.\s*(\w*)\s*(?=\.|\[|$)|\[\s*(-?\d+)\s*\]/g,
        (
          _wholeMatch,
          _quotationMark,
          quotedProp,
          firstLevel,
          namedProp,
          index
        ) => {
          obj = obj[quotedProp || firstLevel || namedProp || index];
        }
      );
      return obj;
    } catch (err) {
      return undefined;
    }
}


describe('Custom Prop', () => {
  it('custom property accessor', () => {
    const options = {
      customProp: (name, get, object) => {
        return get(name) + 1
      }
    }
    const something = compileExpression('1 + foo * bar', options);
    expect(something({foo:5, bar:2})).equals(19);
  })
  it('deep get', () => {
    const options = {
      customProp: (name, get, object) => {
        return deepGet(object, name)
      }
    }
    const eval = (str, obj) => compileExpression(str, options)(obj);

    const something = compileExpression('a.b', options);
    expect(eval('a.b', { a: { b: 19 }})).equals(19);
    expect(eval('a["b"]', { a: { b: 19 }})).equals(19);
    expect(eval("a['b']", { a: { b: 19 }})).equals(19);
    expect(eval('a.b[0]', { a: { b: [19] }})).equals(19);
    expect(eval('a.b[0].c', { a: { b: [{ c: 19 }] }})).equals(19);
  })
})