# Changelog

## [3.0.0](https://github.com/cshaa/filtrex/releases/tag/v3.0.0)
### Breaking Changes
 * Trying to access properties that aren't present in the `data` object now produces an error ([#22](https://github.com/cshaa/filtrex/issues/22))
 * Logical values are no longer converted to `1` and `0`, proper booleans are returned instead ([#27](https://github.com/cshaa/filtrex/issues/27))
 * Corrected the precedence of exponentiation ([#41](https://github.com/cshaa/filtrex/issues/41), [#43](https://github.com/cshaa/filtrex/issues/43))
 * Modulo now always returns a positive number ([#36](https://github.com/cshaa/filtrex/issues/36))
 * Removed `random` from standard functions ([#47](https://github.com/cshaa/filtrex/issues/47))
 * Corrected the precedence of `not in` ([#42](https://github.com/cshaa/filtrex/issues/42))
 * Corrected the precedence of the ternary operator ([#34](https://github.com/cshaa/filtrex/issues/34#issuecomment-866426918))

 ### Deprecations
 * The ternary operator `? :` is now deprecated in favor of `if..then..else` ([#34](https://github.com/cshaa/filtrex/issues/34))
 * Modulo operator `%` is now deprecated in favor of `mod` ([#48](https://github.com/cshaa/filtrex/issues/48))

### New Features
 * Chained comparisons are now possible: `x>y>z`, meaning `x>y and y>z` ([#37](https://github.com/cshaa/filtrex/issues/37))

 * Operators can now be overloaded using `options.operators['+']` and the like ([#38](https://github.com/cshaa/filtrex/issues/30))
   * The supported operators are `+`, `-`, `*`, `/`, `mod`, `^`, `==`, `!=`, `<`, `<=`, `>=`, `>`, `~=`
   * The minus operator overload is used for both the binary and the unary operator:
     * `-a` will result in `operators['-'](a)`
     * `a - b` will result in `operators['-'](a, b)`.

 * Errors are now i18n-friendly ([#35](https://github.com/cshaa/filtrex/issues/35))
   * `err.I18N_STRING` will return one of the following strings:
     * `UNKNOWN_FUNCTION`, English message: “Unknown function: `<funcName>`”
     * `UNKNOWN_PROPERTY`, English message: “Property “`<propName>`” does not exist.”
     * `UNKNOWN_OPTION`, English message: “Unknown option: `<key>`”
     * `UNEXPECTED_TYPE`, English message: “Expected a `<expected>`, but got a `<got>` instead.”
     * `INTERNAL`, does not have a standardized message

   * The values in angled brackeds are available as properties on the error, eg. `err.funcName` and `err.propName`
   * Parse errors are sadly not i18n-friendly yet – this is a limitation of Jison ([#55](https://github.com/cshaa/filtrex/issues/55))

 * Adds `options.constants`, which allows you to pass constant values (like pi) to the user without the need to modify `data` ([#38](https://github.com/cshaa/filtrex/issues/38))
   * When using unquoted symbols, constants shadow data properties, ie. `2*pi` will resolve as `2*constants.pi` if it is defined
   * Quoted symbols always resolve as data properties, ie. `2*'pi'` will always resolve as `2*data.pi`

 * Optionally, you use dot as a property accessor ([#44](https://github.com/cshaa/filtrex/issues/44#issuecomment-925716818))
   * The available predefined `prop` functions are:  [`useOptionalChaining`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L121), [`useDotAccessOperator`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L149) and [`useDotAccessOperatorAndOptionalChaining`](https://github.com/cshaa/filtrex/blob/0d371508b274f78931c990b9ebfa865c9a89b970/src/filtrex.mjs#L189)
   * `customProp` now has additional argument `type: 'unescaped' | 'single-quoted'`

### How to Migrate from 2.2.0
 * TODO: these will be the steps you need to take for the smoothest ride

## [2.2.0](https://github.com/cshaa/filtrex/releases/tag/v2.2.0)
 * The parser is now precompiled, massively speeding up cold start ([#19](https://github.com/cshaa/filtrex/issues/19))
 * Fixes Jison dependence ([#21](https://github.com/cshaa/filtrex/issues/21))

## [2.0.0](https://github.com/cshaa/filtrex/releases/tag/v2.0.0)

 * **BREAKING CHANGE**: Changes the `compileExpression` method's call signature
   * Previously the method had up to three parameters: `expression`, `extraFunctions` and `customProp`
   * Now the method has two parameters: `expression` and `options`, where `options = { extraFunctions, customProp }`

 * **BREAKING CHANGE**: Adds support for quote-escaping in string literals and quoted symbols ([#11](https://github.com/cshaa/filtrex/issues/11), [#12](https://github.com/cshaa/filtrex/pull/12), [#20](https://github.com/cshaa/filtrex/issues/20), [#31j](https://github.com/joewalnes/filtrex/issues/31))
   * `"some \"quoted\" string and a \\ backslash"`
   * `'a \'quoted\' symbol and a \\ backslash'`
   * backslash `\` character now has to be escaped `\\`
   * these expressions throw a syntax error: `"\'"`, `'\"'`, `"\n"` (use literal newline), `"\anythingother"`

 * Adds support for `in` operator with runtime arrays ([#14](https://github.com/cshaa/filtrex/issues/14))
   *  `value in array` will return `1` when the value is present in the array and `0` otherwise
   *  `array in array` will return `1` when the first array is a subset of the second one, `0` otherwise
   *  `array in value` and `value in value` technically also work, they convert `value` to `[value]`
 
 * Errors are no longer thrown, but instead catched and returned ([#7](https://github.com/cshaa/filtrex/issues/7))


## [1.0.0](https://github.com/cshaa/filtrex/releases/tag/v1.0.0)
 * **FIXED VULNERABILITY**: Not prone to XSS anymore ([#17j](https://github.com/joewalnes/filtrex/issues/17), [#18j](https://github.com/joewalnes/filtrex/issues/18))
 * **FIXED VULNERABILITY**: More robust against prototype attacks ([#19j](https://github.com/joewalnes/filtrex/pull/19), [#20j](https://github.com/joewalnes/filtrex/pull/20))
 * Adds TypeScript type definitions
 * Adds syntax for arrays: `(a, b, c)`
 * Adds the `of` property accessor: `a of b` translates to `data.b.a`
 * Adds the ability to customize the `prop` function ([#27j](https://github.com/joewalnes/filtrex/issues/27), [#28j](https://github.com/joewalnes/filtrex/pull/28))

## 0.5.4
 * The original version by [Joe Walnes](https://github.com/joewalnes)
 * **KNOWN VULNERABILITY**: Quotes can be exploited for XSS, see [#17j](https://github.com/joewalnes/filtrex/issues/17), [#18j](https://github.com/joewalnes/filtrex/issues/18)
 * **KNOWN VULNERABILITY**: Prototypes are accessible from expressions
