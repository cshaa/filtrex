# Filtrex
[![Build Status](https://travis-ci.com/cshaa/filtrex.svg?branch=master)](https://travis-ci.com/cshaa/filtrex)

----

**⚠️ UPGRADING TO v3 ⚠️**: If you're using Filtrex v2 and want to upgrade to the new version, check the [changelog](https://github.com/cshaa/filtrex/blob/main/CHANGELOG.md) and [this issue](https://github.com/cshaa/filtrex/issues/49). If you need help with the migration, feel free to open an issue.

----

A simple, safe, JavaScript expression engine, allowing end-users to enter arbitrary expressions without p0wning you.

```python
category == "meal" and (calories * weight > 2000.0 or subcategory in ("cake", "pie"))
```

## Get it

Filtrex is available as an NPM package via `yarn add filtrex` or `npm install filtrex`:
```typescript
import { compileExpression } from 'filtrex';
const f = compileExpression(`category == "meal"`)
```
You can also get the bundled versions from [`./dist/`](https://github.com/cshaa/filtrex/tree/main/dist).


## Why?

There are many cases where you want a user to be able enter an arbitrary expression through a user interface. e.g.

*   Plot a chart ([example](https://cshaa.github.io/filtrex/example/plot.html))
*   Filter/searching across items using multiple fields ([example](https://cshaa.github.io/filtrex/example/highlight.html))
*   Colorize items based on values ([example](https://cshaa.github.io/filtrex/example/colorize.html))
*   Implement a browser based spreadsheet

Sure, you could do that with JavaScript and `eval()`, but I'm sure I don't have to tell you how stupid that would be.

Filtrex defines a really simple expression language that should be familiar to anyone who's ever used a spreadsheet, and compiles it into a JavaScript function at runtime.

## Features

*   **Simple!** End user expression language looks like this `transactions <= 5 and abs(profit) > 20.5`
*   **Fast!** Expressions get compiled into JavaScript functions, offering the same performance as if it had been hand coded. e.g. `function(item) { return item.transactions <=5 && Math.abs(item.profit) > 20.5; }`
*   **Safe!** You as the developer have control of which data can be accessed and the functions that can be called. Expressions cannot escape the sandbox.
*   **Pluggable!** Add your own data and functions.
*   **Predictable!** Because users can't define loops or recursive functions, you know you won't be left hanging.

## 10 second tutorial

```typescript
import { compileExpression } from 'filtrex';

// Input from user (e.g. search filter)
const expression = `transactions <= 5 and abs(profit) > 20.5`;

// Compile expression to executable function
const myfilter = compileExpression(expression);

// Execute function
myfilter({transactions: 3, profit:-40.5}); // → true
myfilter({transactions: 3, profit:-14.5}); // → false
```
[→ Try it!](https://runkit.com/embed/54j5n8oak7hj)

<br />

Under the hood, the above expression gets compiled to a clean and fast JavaScript function, looking something like this:

```javascript
(item) => item.transactions <= 5 && Math.abs(item.profit) > 20.5;
```

## Expressions

There are 5 types in Filtrex: numbers, strings, booleans and arrays & objects of these. Numbers may be floating point or integers. The properties of an object can be accessed using the `of` operator. Types don't get automatically converted: `1 + true` isn't two, but an error.

Values                | Description
--------------------- | ------------
43, -1.234            | Numbers
"hello"               | String
" \\" \\\\ "          | Escaping of double-quotes and blackslash in string
foo, a.b.c, 'foo-bar' | External data variable defined by application

**BEWARE!** Strings must be double-quoted! Single quotes are for external variables. Also, `a.b.c` doesn't mean `data.a.b.c`, it means `data['a.b.c']`.

<br />

Numeric arithmetic | Description
------------------ | ------------
x + y              | Add
x - y              | Subtract
x * y              | Multiply
x / y              | Divide
x ^ y              | Power
x mod y            | Modulo

**BEWARE!** Modulo always returns a positive number: `-1 mod 3 == 2`.

<br />

Comparisons        | Description
------------------ | ------------
x == y             | Equals
x != y             | Does not equal
x < y              | Less than
x <= y             | Less than or equal to
x > y              | Greater than
x >= y             | Greater than or equal to
x == y <= z        | Chained relation, equivalent to (x == y and y <= z)
x ~= y             | Regular expression match
x in (a, b, c)     | Equivalent to (x == a or x == b or x == c)
x not in (a, b, c) | Equivalent to (x != a and x != b and x != c)

<br />

Boolean logic      | Description
------------------ | ------------
x or y             | Boolean or
x and y            | Boolean and
not x              | Boolean not
if x then y else z | If boolean x is true, return value y, else return z
( x )              | Explicity operator precedence

<br />

Objects and arrays | Description
------------------ | ------------
(a, b, c)          | Array
a in b             | Array a is a subset of array b
x of y             | Property x of object y

<br />

Built-in functions | Description
------------------ | ------------
abs(x)             | Absolute value
ceil(x)            | Round floating point up
empty(x)           | True if _x_ is `undefined`, `null`, an empty array or an empty string
exists(x)          | True unless _x_ is `undefined` or `null`
floor(x)           | Round floating point down
log(x)             | Natural logarithm
log2(x)            | Logarithm base two
log10(x)           | Logarithm base ten
max(a, b, c...)    | Max value (variable length of args)
min(a, b, c...)    | Min value (variable length of args)
round(x)           | Round floating point
sqrt(x)            | Square root

<br />


## Errors
Filtrex may throw during the compilation of an expression (for example if it's malformed, or when you supply invalid options). However, it will never throw during the execution of an expression – instead it will _return_ the corresponding error. It is intentional: this way you don't have to be too cautious when executing user-defined filters even in critical code.

Error type           | Meaning
-------------------- | --------
UnknownOptionError   | You specified an option which was not recognized by Filtrex. Double-check your spelling and the version of Filtrex you are using.
UnexpectedTypeError  | The user passed a different type than the one accepted by the function or operator.
UnknownFunctionError | The user attempted to call a function which is not a predefined function, nor specified in `options.extraFunctions`.
UnknownPropertyError | The user attempted to access a property which is not present in the `data` object, nor in the `constants`. If the property is meant to be empty, use `undefined` or `null` as its value. If you need to use optional properties in your `data`, define a `customProp` function.
Error                | A general error, typically thrown by Jison when parsing a malformed expression.

To achieve a good UX, it is recommended to continually validate the user's expression and let them know whether it's well-formed. To achieve this, you can try to build their expression and evaluate it on sample data every few milliseconds – if it either throws or returns an error, display that error to them.

Many errors have a unique `I18N_STRING` to help you translate the message to the user's preferred language. Check [errors.mjs](https://github.com/cshaa/filtrex/blob/main/src/errors.mjs) for more info.


## Custom functions and constants

When integrating Filtrex into your application, you can add your own custom functions.

```typescript
// Custom function: Return string length.
function strlen(s) {
  return s.length;
}

let options = {
  extraFunctions: { strlen }
};

// Compile expression to executable function
let myfilter = compileExpression('strlen(firstname) > 5', options);

myfilter({firstname:'Joe'});    // → false
myfilter({firstname:'Joseph'}); // → true
```
[→ Try it!](https://runkit.com/embed/78cxrv824ba2)

You can also add custom constants. This is useful when you want to let the user use a constant value without modifying all the data. If you specify a constant whose name also exists in your data, the constant will have precedence. However, constants cannot be accessed using single-quoted symbols.

```typescript
const options = {
  constants: { pi: Math.PI }
}
const fn = compileExpression(`2 * pi * radius`, options)

fn({ radius: 1/2 })
// → Math.PI
```
[→ Try it!](https://runkit.com/embed/r2uvb1issq94)

```typescript
const options = { constants: { a: "a_const " } }
const data = { a: "a_data ", b: "b_data " }

// single-quotes give access to data
const expr = `'a' + a + 'b' + b`

compileExpression(expr, options)(data)
// → "a_data a_const b_data b_data"
```
[→ Try it!](https://runkit.com/embed/16nyj1esa1ed)

## Custom operator implementations

Filtrex has many built-in operators: `+`, `-`, `*`, `/`, `^`, `mod`, `==`, `!=`, `<`, `<=`, `>=`, `>`, `~=` and each of them has a well-defined behavior. However, if you want to change anything about them, you are free to. You can override one or more operators using the `options.operators` setting.

```typescript
import { compileExpression } from "filtrex";
import { add, subtract, unaryMinus, matrix }  from "mathjs";

const options = {
  operators: {
    '+': add,
    '-': (a, b) => b == undefined ? unaryMinus(a) : subtract(a, b),
  }
};

const data = { a: matrix([1, 2, 3]), b: matrix([-1, 0, 1]) };

compileExpression(`-a + b`, options)(data)
// → matrix([-2, -2, -2])
```
[→ Try it!](https://runkit.com/embed/3fxrsd05rqx5)

## Custom property function

If you want to do even more magic with Filtrex, you can supply a custom function that will resolve the identifiers used in expressions and assign them a value yourself. This is called a _property function_ and has the following signature:

```typescript
function propFunction(
  propertyName: string, // name of the property being accessed
  get: (name: string) => obj[name], // safe getter that retrieves the property from obj
  obj: any, // the object passed to compiled expression
  type: 'unescaped' | 'single-quoted' // whether the symbol was unquoted or enclosed in single quotes
)
```

For example, this can be useful when you're filtering based on whether a string contains some words or not:

```javascript
function containsWord(string, word) {
  // your optimized code
}

let options = {
  customProp: (word, _, string) => containsWord(string, word)
};

let myfilter = compileExpression('Bob and Alice or Cecil', options);

myfilter("Bob is boring"); // → false
myfilter("Bob met Alice"); // → true
myfilter("Cecil is cool"); // → true
```
[→ Try it!](https://runkit.com/embed/df14qhryj0o4)

**Safety note:** The `get` function returns `undefined` for properties that are defined on the object's prototype, not on the object itself. This is important, because otherwise the user could access things like `toString.constructor` and maybe do some nasty things with it. Bear this in mind if you decide not to use `get` and access the properties yourself.

## FAQ

**Why the name?**

Because you can use it to make _**filt**e**r**ing **ex**pressions_ – expressions that filter data.

**What's Jison?**

[Jison](http://zaach.github.io/jison/) is bundled with Filtrex – it's a JavaScript parser generator that does the underlying hard work of understanding the expression. It's based on Flex and Bison.

**License?**

[MIT](https://github.com/cshaa/filtrex/raw/main/LICENSE)

**Unit tests?**

Here: [Source](https://github.com/cshaa/filtrex/tree/main/test)

**What happens if the expression is malformed?**

Calling `compileExpression()` with a malformed expression will throw an exception. You can catch that and display feedback to the user. A good UI pattern is to attempt to compile on each change (properly [debounced](https://medium.com/@jamischarles/what-is-debouncing-2505c0648ff1), of course) and continuously indicate whether the expression is valid. On the other hand, once the expression is successfully compiled, it will never throw – this is to prevent the user from making your program fail when you expect it the least – a compiled expression that fails at runtime will **return** an error.

**Strings don't work! I can't access a property!**

Strings in Filtrex are always double-quoted, like this: `"hello"`, never single-quoted. Symbols _(ie. data accessors, or variables)_ can be unquoted or single-quoted, for example: `foo`, `'foo-bar'`, `foo.bar`. However, the dot there doesn't mean a property accessor – it's just a symbol named literally "foo.bar".

**Can I use dots as property accessors?**

Yes, you can – using a custom prop function! Since this request is a common one, we even ship the required function with Filtrex – it's called [`useDotAccessOperator`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L149). It is enough to do the following:
```typescript
import {
  compileExpression,
  useDotAccessOperator
} from 'filtrex'

const expr = "foo.bar"
const fn = compileExpression(expr, {
  customProp: useDotAccessOperator
});

fn({ foo: { bar: 42 } }) // → 42
```

**Can I get rid of the UnknownPropertyError?**

If you want to return `undefined` instead of an error when the user accesses an undefined field, you can use the 
[`useOptionalChaining`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L121) property function. And if you want to combine it with dots as access operators, use the [`useDotAccessOperatorAndOptionalChaining`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L189) prop function.


Contributors
------------

* [@joewalnes](https://github.com/joewalnes) Joe Walnes – the original author of this repository
* [@cshaa](https://github.com/cshaa) Michal Grňo – maintainer of the NPM package and the current main developer
* [@msantos](https://github.com/msantos) Michael Santos – quoted symbols, regex matches and numerous fixes
* [@bradparks](https://github.com/bradparks) Brad Parks – extensible prop function
* [@arendjr](https://github.com/arendjr) Arend van Beelen jr. – quote escaping in string literals
* [@alexgorbatchev](https://github.com/alexgorbatchev) Alex Gorbatchev – the original maintainer of the NPM package
