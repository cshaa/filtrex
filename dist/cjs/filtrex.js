'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, '__esModule', {
  value: true
});
/* Jison generated parser */

var _parser = function () {
  var parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      "error": 2,
      "expressions": 3,
      "e": 4,
      "EndOfExpression": 5,
      "-": 6,
      "+": 7,
      "*": 8,
      "/": 9,
      "^": 10,
      "mod": 11,
      "and": 12,
      "or": 13,
      "not": 14,
      "if": 15,
      "then": 16,
      "else": 17,
      "in": 18,
      "notIn": 19,
      "(": 20,
      ")": 21,
      "Arguments": 22,
      ",": 23,
      "Number": 24,
      "Symbol": 25,
      "String": 26,
      "of": 27,
      "Relation": 28,
      "%": 29,
      "?": 30,
      ":": 31,
      "RelationalOperator": 32,
      "==": 33,
      "!=": 34,
      "~=": 35,
      "<": 36,
      "<=": 37,
      ">=": 38,
      ">": 39,
      "$accept": 0,
      "$end": 1
    },
    terminals_: {
      2: "error",
      5: "EndOfExpression",
      6: "-",
      7: "+",
      8: "*",
      9: "/",
      10: "^",
      11: "mod",
      12: "and",
      13: "or",
      14: "not",
      15: "if",
      16: "then",
      17: "else",
      18: "in",
      19: "notIn",
      20: "(",
      21: ")",
      23: ",",
      24: "Number",
      25: "Symbol",
      26: "String",
      27: "of",
      29: "%",
      30: "?",
      31: ":",
      33: "==",
      34: "!=",
      35: "~=",
      36: "<",
      37: "<=",
      38: ">=",
      39: ">"
    },
    productions_: [0, [3, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 2], [4, 6], [4, 3], [4, 3], [4, 3], [4, 5], [4, 1], [4, 1], [4, 1], [4, 3], [4, 3], [4, 4], [4, 1], [4, 3], [4, 5], [32, 1], [32, 1], [32, 1], [32, 1], [32, 1], [32, 1], [32, 1], [28, 3], [28, 3], [22, 1], [22, 3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;

      switch (yystate) {
        case 1:
          return $$[$0 - 1];

        case 2:
          this.$ = ["(", "ops['-'](", $$[$0], ")", ")"];
          break;

        case 3:
          this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 4:
          this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 5:
          this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 6:
          this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 7:
          this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 8:
          this.$ = ["(", "ops.mod(", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 9:
          this.$ = ["(", "", "std.coerceBoolean", "(", $$[$0 - 2], ") && ", "std.coerceBoolean", "(", $$[$0], ")", ")"];
          break;

        case 10:
          this.$ = ["(", "", "std.coerceBoolean", "(", $$[$0 - 2], ") || ", "std.coerceBoolean", "(", $$[$0], ")", ")"];
          break;

        case 11:
          this.$ = ["(", "! ", "std.coerceBoolean", "(", $$[$0], ")", ")"];
          break;

        case 12:
          this.$ = ["(", "", "std.coerceBoolean", "(", $$[$0 - 4], ") ? ", $$[$0 - 2], " : ", $$[$0], "", ")"];
          break;

        case 13:
          this.$ = ["(", "std.isSubset(", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 14:
          this.$ = ["(", "!std.isSubset(", $$[$0 - 2], ", ", $$[$0], ")", ")"];
          break;

        case 15:
          this.$ = ["(", "", $$[$0 - 1], "", ")"];
          break;

        case 16:
          this.$ = ["(", "[ ", $$[$0 - 3], ", ", $$[$0 - 1], " ]", ")"];
          break;

        case 17:
          this.$ = ["", $$[$0], ""];
          break;

        case 18:
          this.$ = ["prop(", $$[$0], ", data)"];
          break;

        case 19:
          this.$ = ["", $$[$0], ""];
          break;

        case 20:
          this.$ = ["prop(", $$[$0 - 2], ", ", $$[$0], ")"];
          break;

        case 21:
          this.$ = ["call(", $$[$0 - 2], ")"];
          break;

        case 22:
          this.$ = ["call(", $$[$0 - 3], ", ", $$[$0 - 1], ")"];
          break;

        case 23:
          this.$ = yy.reduceRelation($$[$0]);
          break;

        case 24:
          this.$ = ["std.warnDeprecated('modulo', ops['mod'](", $$[$0 - 2], ", ", $$[$0], "))"];
          break;

        case 25:
          this.$ = ["std.warnDeprecated('ternary', ", "std.coerceBoolean", "(", $$[$0 - 4], ") ? ", $$[$0 - 2], " : ", $$[$0], ")"];
          break;

        case 26:
          this.$ = ["=="];
          break;

        case 27:
          this.$ = ["!="];
          break;

        case 28:
          this.$ = ["~="];
          break;

        case 29:
          this.$ = ["<"];
          break;

        case 30:
          this.$ = ["<="];
          break;

        case 31:
          this.$ = [">="];
          break;

        case 32:
          this.$ = [">"];
          break;

        case 33:
          this.$ = [$$[$0 - 2], $$[$0 - 1]].concat(_toConsumableArray($$[$0]));
          break;

        case 34:
          this.$ = [$$[$0 - 2], $$[$0 - 1], $$[$0]];
          break;

        case 35:
          this.$ = ["", $$[$0], ""];
          break;

        case 36:
          this.$ = ["", $$[$0 - 2], ", ", $$[$0], ""];
          break;
      }
    },
    table: [{
      3: 1,
      4: 2,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      1: [3]
    }, {
      5: [1, 11],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      4: 32,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 33,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 34,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 35,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      22: 36,
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 17],
      6: [2, 17],
      7: [2, 17],
      8: [2, 17],
      9: [2, 17],
      10: [2, 17],
      11: [2, 17],
      12: [2, 17],
      13: [2, 17],
      16: [2, 17],
      17: [2, 17],
      18: [2, 17],
      19: [2, 17],
      21: [2, 17],
      23: [2, 17],
      29: [2, 17],
      30: [2, 17],
      31: [2, 17],
      33: [2, 17],
      34: [2, 17],
      35: [2, 17],
      36: [2, 17],
      37: [2, 17],
      38: [2, 17],
      39: [2, 17]
    }, {
      5: [2, 18],
      6: [2, 18],
      7: [2, 18],
      8: [2, 18],
      9: [2, 18],
      10: [2, 18],
      11: [2, 18],
      12: [2, 18],
      13: [2, 18],
      16: [2, 18],
      17: [2, 18],
      18: [2, 18],
      19: [2, 18],
      20: [1, 38],
      21: [2, 18],
      23: [2, 18],
      27: [1, 37],
      29: [2, 18],
      30: [2, 18],
      31: [2, 18],
      33: [2, 18],
      34: [2, 18],
      35: [2, 18],
      36: [2, 18],
      37: [2, 18],
      38: [2, 18],
      39: [2, 18]
    }, {
      5: [2, 19],
      6: [2, 19],
      7: [2, 19],
      8: [2, 19],
      9: [2, 19],
      10: [2, 19],
      11: [2, 19],
      12: [2, 19],
      13: [2, 19],
      16: [2, 19],
      17: [2, 19],
      18: [2, 19],
      19: [2, 19],
      21: [2, 19],
      23: [2, 19],
      29: [2, 19],
      30: [2, 19],
      31: [2, 19],
      33: [2, 19],
      34: [2, 19],
      35: [2, 19],
      36: [2, 19],
      37: [2, 19],
      38: [2, 19],
      39: [2, 19]
    }, {
      5: [2, 23],
      6: [2, 23],
      7: [2, 23],
      8: [2, 23],
      9: [2, 23],
      10: [2, 23],
      11: [2, 23],
      12: [2, 23],
      13: [2, 23],
      16: [2, 23],
      17: [2, 23],
      18: [2, 23],
      19: [2, 23],
      21: [2, 23],
      23: [2, 23],
      29: [2, 23],
      30: [2, 23],
      31: [2, 23],
      33: [2, 23],
      34: [2, 23],
      35: [2, 23],
      36: [2, 23],
      37: [2, 23],
      38: [2, 23],
      39: [2, 23]
    }, {
      1: [2, 1]
    }, {
      4: 39,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 40,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 41,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 42,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 43,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 44,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 45,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 46,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 47,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 48,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 49,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 50,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 52,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 51
    }, {
      6: [2, 26],
      14: [2, 26],
      15: [2, 26],
      20: [2, 26],
      24: [2, 26],
      25: [2, 26],
      26: [2, 26]
    }, {
      6: [2, 27],
      14: [2, 27],
      15: [2, 27],
      20: [2, 27],
      24: [2, 27],
      25: [2, 27],
      26: [2, 27]
    }, {
      6: [2, 28],
      14: [2, 28],
      15: [2, 28],
      20: [2, 28],
      24: [2, 28],
      25: [2, 28],
      26: [2, 28]
    }, {
      6: [2, 29],
      14: [2, 29],
      15: [2, 29],
      20: [2, 29],
      24: [2, 29],
      25: [2, 29],
      26: [2, 29]
    }, {
      6: [2, 30],
      14: [2, 30],
      15: [2, 30],
      20: [2, 30],
      24: [2, 30],
      25: [2, 30],
      26: [2, 30]
    }, {
      6: [2, 31],
      14: [2, 31],
      15: [2, 31],
      20: [2, 31],
      24: [2, 31],
      25: [2, 31],
      26: [2, 31]
    }, {
      6: [2, 32],
      14: [2, 32],
      15: [2, 32],
      20: [2, 32],
      24: [2, 32],
      25: [2, 32],
      26: [2, 32]
    }, {
      5: [2, 2],
      6: [2, 2],
      7: [2, 2],
      8: [2, 2],
      9: [2, 2],
      10: [1, 16],
      11: [2, 2],
      12: [2, 2],
      13: [2, 2],
      16: [2, 2],
      17: [2, 2],
      18: [2, 2],
      19: [2, 2],
      21: [2, 2],
      23: [2, 2],
      29: [2, 2],
      30: [2, 2],
      31: [2, 2],
      32: 24,
      33: [2, 2],
      34: [2, 2],
      35: [2, 2],
      36: [2, 2],
      37: [2, 2],
      38: [2, 2],
      39: [2, 2]
    }, {
      5: [2, 11],
      6: [2, 11],
      7: [2, 11],
      8: [2, 11],
      9: [2, 11],
      10: [1, 16],
      11: [2, 11],
      12: [2, 11],
      13: [2, 11],
      16: [2, 11],
      17: [2, 11],
      18: [2, 11],
      19: [2, 11],
      21: [2, 11],
      23: [2, 11],
      29: [2, 11],
      30: [2, 11],
      31: [2, 11],
      32: 24,
      33: [2, 11],
      34: [2, 11],
      35: [2, 11],
      36: [2, 11],
      37: [2, 11],
      38: [2, 11],
      39: [2, 11]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      16: [1, 53],
      18: [1, 20],
      19: [1, 21],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      21: [1, 54],
      23: [2, 35],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      23: [1, 55]
    }, {
      4: 56,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      4: 59,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      21: [1, 57],
      22: 58,
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 3],
      6: [2, 3],
      7: [2, 3],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 3],
      13: [2, 3],
      16: [2, 3],
      17: [2, 3],
      18: [2, 3],
      19: [2, 3],
      21: [2, 3],
      23: [2, 3],
      29: [1, 22],
      30: [2, 3],
      31: [2, 3],
      32: 24,
      33: [2, 3],
      34: [2, 3],
      35: [2, 3],
      36: [2, 3],
      37: [2, 3],
      38: [2, 3],
      39: [2, 3]
    }, {
      5: [2, 4],
      6: [2, 4],
      7: [2, 4],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 4],
      13: [2, 4],
      16: [2, 4],
      17: [2, 4],
      18: [2, 4],
      19: [2, 4],
      21: [2, 4],
      23: [2, 4],
      29: [1, 22],
      30: [2, 4],
      31: [2, 4],
      32: 24,
      33: [2, 4],
      34: [2, 4],
      35: [2, 4],
      36: [2, 4],
      37: [2, 4],
      38: [2, 4],
      39: [2, 4]
    }, {
      5: [2, 5],
      6: [2, 5],
      7: [2, 5],
      8: [2, 5],
      9: [2, 5],
      10: [1, 16],
      11: [2, 5],
      12: [2, 5],
      13: [2, 5],
      16: [2, 5],
      17: [2, 5],
      18: [2, 5],
      19: [2, 5],
      21: [2, 5],
      23: [2, 5],
      29: [2, 5],
      30: [2, 5],
      31: [2, 5],
      32: 24,
      33: [2, 5],
      34: [2, 5],
      35: [2, 5],
      36: [2, 5],
      37: [2, 5],
      38: [2, 5],
      39: [2, 5]
    }, {
      5: [2, 6],
      6: [2, 6],
      7: [2, 6],
      8: [2, 6],
      9: [2, 6],
      10: [1, 16],
      11: [2, 6],
      12: [2, 6],
      13: [2, 6],
      16: [2, 6],
      17: [2, 6],
      18: [2, 6],
      19: [2, 6],
      21: [2, 6],
      23: [2, 6],
      29: [2, 6],
      30: [2, 6],
      31: [2, 6],
      32: 24,
      33: [2, 6],
      34: [2, 6],
      35: [2, 6],
      36: [2, 6],
      37: [2, 6],
      38: [2, 6],
      39: [2, 6]
    }, {
      5: [2, 7],
      6: [2, 7],
      7: [2, 7],
      8: [2, 7],
      9: [2, 7],
      10: [1, 16],
      11: [2, 7],
      12: [2, 7],
      13: [2, 7],
      16: [2, 7],
      17: [2, 7],
      18: [2, 7],
      19: [2, 7],
      21: [2, 7],
      23: [2, 7],
      29: [2, 7],
      30: [2, 7],
      31: [2, 7],
      32: 24,
      33: [2, 7],
      34: [2, 7],
      35: [2, 7],
      36: [2, 7],
      37: [2, 7],
      38: [2, 7],
      39: [2, 7]
    }, {
      5: [2, 8],
      6: [2, 8],
      7: [2, 8],
      8: [2, 8],
      9: [2, 8],
      10: [1, 16],
      11: [2, 8],
      12: [2, 8],
      13: [2, 8],
      16: [2, 8],
      17: [2, 8],
      18: [2, 8],
      19: [2, 8],
      21: [2, 8],
      23: [2, 8],
      29: [2, 8],
      30: [2, 8],
      31: [2, 8],
      32: 24,
      33: [2, 8],
      34: [2, 8],
      35: [2, 8],
      36: [2, 8],
      37: [2, 8],
      38: [2, 8],
      39: [2, 8]
    }, {
      5: [2, 9],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 9],
      13: [2, 9],
      16: [2, 9],
      17: [2, 9],
      18: [1, 20],
      19: [1, 21],
      21: [2, 9],
      23: [2, 9],
      29: [1, 22],
      30: [2, 9],
      31: [2, 9],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 10],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [2, 10],
      16: [2, 10],
      17: [2, 10],
      18: [1, 20],
      19: [1, 21],
      21: [2, 10],
      23: [2, 10],
      29: [1, 22],
      30: [2, 10],
      31: [2, 10],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 13],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 13],
      13: [2, 13],
      16: [2, 13],
      17: [2, 13],
      18: [2, 13],
      19: [2, 13],
      21: [2, 13],
      23: [2, 13],
      29: [1, 22],
      30: [2, 13],
      31: [2, 13],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 14],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 14],
      13: [2, 14],
      16: [2, 14],
      17: [2, 14],
      18: [2, 14],
      19: [2, 14],
      21: [2, 14],
      23: [2, 14],
      29: [1, 22],
      30: [2, 14],
      31: [2, 14],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 24],
      6: [2, 24],
      7: [2, 24],
      8: [2, 24],
      9: [2, 24],
      10: [1, 16],
      11: [2, 24],
      12: [2, 24],
      13: [2, 24],
      16: [2, 24],
      17: [2, 24],
      18: [2, 24],
      19: [2, 24],
      21: [2, 24],
      23: [2, 24],
      29: [2, 24],
      30: [2, 24],
      31: [2, 24],
      32: 24,
      33: [2, 24],
      34: [2, 24],
      35: [2, 24],
      36: [2, 24],
      37: [2, 24],
      38: [2, 24],
      39: [2, 24]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      29: [1, 22],
      30: [1, 23],
      31: [1, 60],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 33],
      6: [2, 33],
      7: [2, 33],
      8: [2, 33],
      9: [2, 33],
      10: [2, 33],
      11: [2, 33],
      12: [2, 33],
      13: [2, 33],
      16: [2, 33],
      17: [2, 33],
      18: [2, 33],
      19: [2, 33],
      21: [2, 33],
      23: [2, 33],
      29: [2, 33],
      30: [2, 33],
      31: [2, 33],
      33: [2, 33],
      34: [2, 33],
      35: [2, 33],
      36: [2, 33],
      37: [2, 33],
      38: [2, 33],
      39: [2, 33]
    }, {
      5: [2, 34],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [2, 34],
      13: [2, 34],
      16: [2, 34],
      17: [2, 34],
      18: [2, 34],
      19: [2, 34],
      21: [2, 34],
      23: [2, 34],
      29: [1, 22],
      30: [2, 34],
      31: [2, 34],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      4: 61,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 15],
      6: [2, 15],
      7: [2, 15],
      8: [2, 15],
      9: [2, 15],
      10: [2, 15],
      11: [2, 15],
      12: [2, 15],
      13: [2, 15],
      16: [2, 15],
      17: [2, 15],
      18: [2, 15],
      19: [2, 15],
      21: [2, 15],
      23: [2, 15],
      29: [2, 15],
      30: [2, 15],
      31: [2, 15],
      33: [2, 15],
      34: [2, 15],
      35: [2, 15],
      36: [2, 15],
      37: [2, 15],
      38: [2, 15],
      39: [2, 15]
    }, {
      4: 62,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 20],
      6: [2, 20],
      7: [2, 20],
      8: [2, 20],
      9: [2, 20],
      10: [2, 20],
      11: [2, 20],
      12: [2, 20],
      13: [2, 20],
      16: [2, 20],
      17: [2, 20],
      18: [2, 20],
      19: [2, 20],
      21: [2, 20],
      23: [2, 20],
      29: [2, 20],
      30: [2, 20],
      31: [2, 20],
      32: 24,
      33: [2, 20],
      34: [2, 20],
      35: [2, 20],
      36: [2, 20],
      37: [2, 20],
      38: [2, 20],
      39: [2, 20]
    }, {
      5: [2, 21],
      6: [2, 21],
      7: [2, 21],
      8: [2, 21],
      9: [2, 21],
      10: [2, 21],
      11: [2, 21],
      12: [2, 21],
      13: [2, 21],
      16: [2, 21],
      17: [2, 21],
      18: [2, 21],
      19: [2, 21],
      21: [2, 21],
      23: [2, 21],
      29: [2, 21],
      30: [2, 21],
      31: [2, 21],
      33: [2, 21],
      34: [2, 21],
      35: [2, 21],
      36: [2, 21],
      37: [2, 21],
      38: [2, 21],
      39: [2, 21]
    }, {
      21: [1, 63],
      23: [1, 64]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      21: [2, 35],
      23: [2, 35],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      4: 65,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      17: [1, 66],
      18: [1, 20],
      19: [1, 21],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      21: [1, 67],
      23: [2, 36],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 22],
      6: [2, 22],
      7: [2, 22],
      8: [2, 22],
      9: [2, 22],
      10: [2, 22],
      11: [2, 22],
      12: [2, 22],
      13: [2, 22],
      16: [2, 22],
      17: [2, 22],
      18: [2, 22],
      19: [2, 22],
      21: [2, 22],
      23: [2, 22],
      29: [2, 22],
      30: [2, 22],
      31: [2, 22],
      33: [2, 22],
      34: [2, 22],
      35: [2, 22],
      36: [2, 22],
      37: [2, 22],
      38: [2, 22],
      39: [2, 22]
    }, {
      4: 68,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 25],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      16: [2, 25],
      17: [2, 25],
      18: [1, 20],
      19: [1, 21],
      21: [2, 25],
      23: [2, 25],
      29: [1, 22],
      30: [1, 23],
      31: [2, 25],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      4: 69,
      6: [1, 3],
      14: [1, 4],
      15: [1, 5],
      20: [1, 6],
      24: [1, 7],
      25: [1, 8],
      26: [1, 9],
      28: 10
    }, {
      5: [2, 16],
      6: [2, 16],
      7: [2, 16],
      8: [2, 16],
      9: [2, 16],
      10: [2, 16],
      11: [2, 16],
      12: [2, 16],
      13: [2, 16],
      16: [2, 16],
      17: [2, 16],
      18: [2, 16],
      19: [2, 16],
      21: [2, 16],
      23: [2, 16],
      29: [2, 16],
      30: [2, 16],
      31: [2, 16],
      33: [2, 16],
      34: [2, 16],
      35: [2, 16],
      36: [2, 16],
      37: [2, 16],
      38: [2, 16],
      39: [2, 16]
    }, {
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      18: [1, 20],
      19: [1, 21],
      21: [2, 36],
      23: [2, 36],
      29: [1, 22],
      30: [1, 23],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }, {
      5: [2, 12],
      6: [1, 13],
      7: [1, 12],
      8: [1, 14],
      9: [1, 15],
      10: [1, 16],
      11: [1, 17],
      12: [1, 18],
      13: [1, 19],
      16: [2, 12],
      17: [2, 12],
      18: [1, 20],
      19: [1, 21],
      21: [2, 12],
      23: [2, 12],
      29: [1, 22],
      30: [1, 23],
      31: [2, 12],
      32: 24,
      33: [1, 25],
      34: [1, 26],
      35: [1, 27],
      36: [1, 28],
      37: [1, 29],
      38: [1, 30],
      39: [1, 31]
    }],
    defaultActions: {
      11: [2, 1]
    },
    parseError: function parseError(str, hash) {
      throw new Error(str);
    },
    parse: function parse(input) {
      var self = this,
          stack = [0],
          vstack = [null],
          // semantic value stack
      lstack = [],
          // location stack
      table = this.table,
          yytext = '',
          yylineno = 0,
          yyleng = 0,
          recovering = 0,
          TERROR = 2,
          EOF = 1; //this.reductionCount = this.shiftCount = 0;

      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == 'undefined') this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === 'function') this.parseError = this.yy.parseError;

      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }

      function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert

        if (typeof token !== 'number') {
          token = self.symbols_[token] || token;
        }

        return token;
      }

      var symbol,
          preErrorSymbol,
          state,
          action,
          r,
          yyval = {},
          p,
          len,
          newState,
          expected;

      while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1]; // use default actions if available

        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == 'undefined') {
            symbol = lex();
          } // read action for current state and first input


          action = table[state] && table[state][symbol];
        } // handle parse error


        if (typeof action === 'undefined' || !action.length || !action[0]) {
          var errStr = '';

          if (!recovering) {
            // Report error
            expected = [];

            for (p in table[state]) {
              if (this.terminals_[p] && p > 2) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }

            if (this.lexer.showPosition) {
              errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
            } else {
              errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " + (symbol == 1
              /*EOF*/
              ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }

            this.parseError(errStr, {
              text: this.lexer.match,
              token: this.terminals_[symbol] || symbol,
              line: this.lexer.yylineno,
              loc: yyloc,
              expected: expected
            });
          } // just recovered from another error


          if (recovering == 3) {
            if (symbol == EOF) {
              throw new Error(errStr || 'Parsing halted.');
            } // discard current lookahead and grab another


            yyleng = this.lexer.yyleng;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            yyloc = this.lexer.yylloc;
            symbol = lex();
          } // try to recover from error


          while (1) {
            // check for error recovery rule in this state
            if (TERROR.toString() in table[state]) {
              break;
            }

            if (state === 0) {
              throw new Error(errStr || 'Parsing halted.');
            }

            popStack(1);
            state = stack[stack.length - 1];
          }

          preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token

          symbol = TERROR; // insert generic error symbol as new lookahead

          state = stack[stack.length - 1];
          action = table[state] && table[state][TERROR];
          recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        } // this shouldn't happen, unless resolve defaults are off


        if (action[0] instanceof Array && action.length > 1) {
          throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }

        switch (action[0]) {
          case 1:
            // shift
            //this.shiftCount++;
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]); // push state

            symbol = null;

            if (!preErrorSymbol) {
              // normal execution/no error
              yyleng = this.lexer.yyleng;
              yytext = this.lexer.yytext;
              yylineno = this.lexer.yylineno;
              yyloc = this.lexer.yylloc;
              if (recovering > 0) recovering--;
            } else {
              // error just occurred, resume old lookahead f/ before error
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }

            break;

          case 2:
            // reduce
            //this.reductionCount++;
            len = this.productions_[action[1]][1]; // perform semantic action

            yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
            // default location, uses first token for firsts, last for lasts

            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };

            if (ranges) {
              yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }

            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

            if (typeof r !== 'undefined') {
              return r;
            } // pop off stack


            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }

            stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)

            vstack.push(yyval.$);
            lstack.push(yyval._$); // goto new state = table[STATE][NONTERMINAL]

            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;

          case 3:
            // accept
            return true;
        }
      }

      return true;
    }
  };

  var lexer = function () {
    var lexer = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      setInput: function setInput(input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) this.yylloc.range = [0, 0];
        this.offset = 0;
        return this;
      },
      input: function input() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);

        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }

        if (this.options.ranges) this.yylloc.range[1]++;
        this._input = this._input.slice(1);
        return ch;
      },
      unput: function unput(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1); //this.yyleng -= len;

        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) this.yylineno -= lines.length - 1;
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };

        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }

        return this;
      },
      more: function more() {
        this._more = true;
        return this;
      },
      less: function less(n) {
        this.unput(this.match.slice(n));
      },
      pastInput: function pastInput() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
      },
      upcomingInput: function upcomingInput() {
        var next = this.match;

        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }

        return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
      },
      showPosition: function showPosition() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      next: function next() {
        if (this.done) {
          return this.EOF;
        }

        if (!this._input) this.done = true;
        var token, match, tempMatch, index, lines;

        if (!this._more) {
          this.yytext = '';
          this.match = '';
        }

        var rules = this._currentRules();

        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);

          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (!this.options.flex) break;
          }
        }

        if (match) {
          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) this.yylineno += lines.length;
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;

          if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
          }

          this._more = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) this.done = false;
          if (token) return token;else return;
        }

        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      lex: function lex() {
        var r = this.next();

        if (typeof r !== 'undefined') {
          return r;
        } else {
          return this.lex();
        }
      },
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      popState: function popState() {
        return this.conditionStack.pop();
      },
      _currentRules: function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      },
      topState: function topState() {
        return this.conditionStack[this.conditionStack.length - 2];
      },
      pushState: function begin(condition) {
        this.begin(condition);
      }
    };
    lexer.options = {};

    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
      switch ($avoiding_name_collisions) {
        case 0:
          return "*";

        case 1:
          return "/";

        case 2:
          return "-";

        case 3:
          return "+";

        case 4:
          return "^";

        case 5:
          return "(";

        case 6:
          return ")";

        case 7:
          return ",";

        case 8:
          return "==";

        case 9:
          return "!=";

        case 10:
          return "~=";

        case 11:
          return ">=";

        case 12:
          return "<=";

        case 13:
          return "<";

        case 14:
          return ">";

        case 15:
          return "notIn";

        case 16:
          return "and";

        case 17:
          return "or";

        case 18:
          return "not";

        case 19:
          return "in";

        case 20:
          return "of";

        case 21:
          return "if";

        case 22:
          return "then";

        case 23:
          return "else";

        case 24:
          return "mod";

        case 25:
          break;

        case 26:
          return "Number";

        case 27:
          yy_.yytext = JSON.stringify({
            name: yy_.yytext,
            type: 'unescaped'
          });
          return "Symbol";

        case 28:
          yy_.yytext = JSON.stringify({
            name: yy.buildString("'", yy_.yytext),
            type: 'single-quoted'
          });
          return "Symbol";

        case 29:
          yy_.yytext = JSON.stringify(yy.buildString('"', yy_.yytext));
          return "String";

        case 30:
          return "%";

        case 31:
          return "?";

        case 32:
          return ":";

        case 33:
          return "EndOfExpression";
      }
    };

    lexer.rules = [/^(?:\*)/, /^(?:\/)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:\()/, /^(?:\))/, /^(?:\,)/, /^(?:==)/, /^(?:\!=)/, /^(?:\~=)/, /^(?:>=)/, /^(?:<=)/, /^(?:<)/, /^(?:>)/, /^(?:not\s+in[^\w])/, /^(?:and[^\w])/, /^(?:or[^\w])/, /^(?:not[^\w])/, /^(?:in[^\w])/, /^(?:of[^\w])/, /^(?:if[^\w])/, /^(?:then[^\w])/, /^(?:else[^\w])/, /^(?:mod[^\w])/, /^(?:\s+)/, /^(?:[0-9]+(?:\.[0-9]+)?(?![0-9\.]))/, /^(?:[a-zA-Z$_][\.a-zA-Z0-9$_]*)/, /^(?:'(?:\\'|\\\\|[^'\\])*')/, /^(?:"(?:\\"|\\\\|[^"\\])*")/, /^(?:\%)/, /^(?:\?)/, /^(?::)/, /^(?:$)/];
    lexer.conditions = {
      "INITIAL": {
        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
        "inclusive": true
      }
    };
    return lexer;
  }();

  parser.lexer = lexer;

  function Parser() {
    this.yy = {};
  }

  Parser.prototype = parser;
  parser.Parser = Parser;
  return new Parser();
}();

var parser = _parser;
_parser.Parser;
/**
 * Runtime error – user attempted to call a function
 * which is not a predefined function, nor specified
 * in `options.extraFunctions`.
 *
 * @prop {string} functionName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_FUNCTION'`
 */

var UnknownFunctionError = /*#__PURE__*/function (_ReferenceError) {
  _inherits(UnknownFunctionError, _ReferenceError);

  var _super = _createSuper(UnknownFunctionError);

  function UnknownFunctionError(funcName) {
    var _this;

    _classCallCheck(this, UnknownFunctionError);

    _this = _super.call(this, "Unknown function: ".concat(funcName, "()"));

    _defineProperty(_assertThisInitialized(_this), "I18N_STRING", 'UNKNOWN_FUNCTION');

    _this.functionName = funcName;
    return _this;
  }

  return _createClass(UnknownFunctionError);
}( /*#__PURE__*/_wrapNativeSuper(ReferenceError));
/**
 * Runtime error – user attempted to access a property which
 * is not present in the `data` object, nor in the `constants`.
 * If the property is meant to be empty, use `undefined` or
 * `null` as its value. If you need to use optional properties
 * in your `data`, define a `customProp` function.
 *
 * @prop {string} propertyName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_PROPERTY'`
 */


var UnknownPropertyError = /*#__PURE__*/function (_ReferenceError2) {
  _inherits(UnknownPropertyError, _ReferenceError2);

  var _super2 = _createSuper(UnknownPropertyError);

  function UnknownPropertyError(propName) {
    var _this2;

    _classCallCheck(this, UnknownPropertyError);

    _this2 = _super2.call(this, "Property \u201C".concat(propName, "\u201D does not exist."));

    _defineProperty(_assertThisInitialized(_this2), "I18N_STRING", 'UNKNOWN_PROPERTY');

    _this2.propertyName = propName;
    return _this2;
  }

  return _createClass(UnknownPropertyError);
}( /*#__PURE__*/_wrapNativeSuper(ReferenceError));
/**
 * Compile time error – you specified an option which
 * was not recognized by Filtrex. Double-check your
 * spelling and the version of Filtrex you are using.
 *
 * @prop {string} keyName
 * @prop {string} I18N_STRING has the value `'UNKNOWN_OPTION'`
 */


var UnknownOptionError = /*#__PURE__*/function (_TypeError) {
  _inherits(UnknownOptionError, _TypeError);

  var _super3 = _createSuper(UnknownOptionError);

  function UnknownOptionError(key) {
    var _this3;

    _classCallCheck(this, UnknownOptionError);

    _this3 = _super3.call(this, "Unknown option: ".concat(key));

    _defineProperty(_assertThisInitialized(_this3), "I18N_STRING", 'UNKNOWN_OPTION');

    _this3.keyName = key;
    return _this3;
  }

  return _createClass(UnknownOptionError);
}( /*#__PURE__*/_wrapNativeSuper(TypeError));
/**
 * Runtime error – user passed a different type than the one
 * accepted by the function or operator.
 *
 * The possible values of `expectedType` and `recievedType`
 * are: `"undefined"`, `"null"`, `"true"`, `"false"`, `"number"`,
 * `"text"`, `"unknown type"`, `"list"`, `"object"`, `"text or number"`
 * and `"logical value (“true” or “false”)"`
 *
 * @prop {string} expectedType
 * @prop {string} recievedType
 * @prop {string} I18N_STRING has the value `'UNEXPECTED_TYPE'`
 */


var UnexpectedTypeError = /*#__PURE__*/function (_TypeError2) {
  _inherits(UnexpectedTypeError, _TypeError2);

  var _super4 = _createSuper(UnexpectedTypeError);

  function UnexpectedTypeError(expected, got) {
    var _this4;

    _classCallCheck(this, UnexpectedTypeError);

    _this4 = _super4.call(this, "Expected a ".concat(expected, ", but got a ").concat(got, " instead."));

    _defineProperty(_assertThisInitialized(_this4), "I18N_STRING", 'UNEXPECTED_TYPE');

    _this4.expectedType = expected;
    _this4.recievedType = got;
    return _this4;
  }

  return _createClass(UnexpectedTypeError);
}( /*#__PURE__*/_wrapNativeSuper(TypeError));
/**
 * An internal error. This was not meant to happen, please report
 * at https://github.com/cshaa/filtrex/
 *
 * @prop {string} I18N_STRING has the value `'INTERNAL'`
 */


var InternalError = /*#__PURE__*/function (_Error) {
  _inherits(InternalError, _Error);

  var _super5 = _createSuper(InternalError);

  function InternalError(message) {
    var _this5;

    _classCallCheck(this, InternalError);

    _this5 = _super5.call(this, message);

    _defineProperty(_assertThisInitialized(_this5), "I18N_STRING", 'INTERNAL');

    return _this5;
  }

  return _createClass(InternalError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Determines whether an object has a property with the specified name.
 * @param {object} obj the object to be checked
 * @param {string|number} prop property name
 */


function hasOwnProperty(obj, prop) {
  if (_typeof(obj) === "object" || typeof obj === "function") {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  return false;
}
/**
 * Mathematically correct modulo
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */


function _mod(a, b) {
  return (a % b + b) % b;
}
/**
 * Converts instances of Number, String and Boolean to primitives
 */


function unbox(value) {
  if (_typeof(value) !== 'object') return value;
  if (value instanceof Number || value instanceof String || value instanceof Boolean) return value.valueOf();
}
/**
 * Unboxes value and unwraps it from a single-element array
 */


function unwrap(value) {
  if (Array.isArray(value) && value.length === 1) value = value[0];
  return unbox(value);
}
/**
 * Returns the type of a value in a neat, user-readable way
 */


function prettyType(value) {
  value = unwrap(value);
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'string') return 'text';
  if (_typeof(value) !== 'object' && typeof value !== 'function') return 'unknown type';
  if (Array.isArray(value)) return 'list';
  return 'object';
} // Type assertions/coertions


function num(value) {
  value = unwrap(value);
  if (typeof value === 'number') return value;
  throw new UnexpectedTypeError('number', prettyType(value));
}

function str(value) {
  value = unwrap(value);
  if (typeof value === 'string') return value;
  throw new UnexpectedTypeError('text', prettyType(value));
}

function numstr(value) {
  value = unwrap(value);
  if (typeof value === 'string' || typeof value === 'number') return value;
  throw new UnexpectedTypeError('text or number', prettyType(value));
}

function bool(value) {
  value = unwrap(value);
  if (typeof value === 'boolean') return value;
  throw new UnexpectedTypeError('logical value (“true” or “false”)', prettyType(value));
}

function arr(value) {
  if (value === undefined || value === null) {
    throw new UnexpectedTypeError('list', prettyType(value));
  }

  if (Array.isArray(value)) {
    return value;
  } else {
    return [value];
  }
}
/**
 * Array.flat polyfill from MDN
 */


function flatten(input) {
  var stack = _toConsumableArray(input);

  var res = [];

  while (stack.length) {
    // pop value from stack
    var next = stack.pop();

    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push.apply(stack, _toConsumableArray(next));
    } else {
      res.push(next);
    }
  } // reverse to restore input order


  return res.reverse();
} // the parser is dynamically generated from generateParser.js at compile time
// Shared utility functions


var std = {
  isfn: function isfn(fns, funcName) {
    return hasOwnProperty(fns, funcName) && typeof fns[funcName] === "function";
  },
  unknown: function unknown(funcName) {
    throw new UnknownFunctionError(funcName);
  },
  coerceArray: arr,
  coerceNumber: num,
  coerceNumberOrString: numstr,
  coerceBoolean: bool,
  isSubset: function isSubset(a, b) {
    var A = arr(a);
    var B = arr(b);
    return A.every(function (val) {
      return B.includes(val);
    });
  },
  warnDeprecated: function () {
    var warnMax = 3;
    var warnedTimes = {
      ternary: 0,
      modulo: 0
    };
    return function (cause, value) {
      switch (cause) {
        case 'ternary':
          if (warnedTimes.ternary++ >= warnMax) break;
          console.warn("The use of ? and : as conditional operators has been deprecated " + "in Filtrex v3 in favor of the if..then..else ternary operator. " + "See issue #34 for more information.");
          break;

        case 'modulo':
          if (warnedTimes.modulo++ >= warnMax) break;
          console.warn("The use of '%' as a modulo operator has been deprecated in Filtrex v3 " + "in favor of the 'mod' operator. You can use it like this: '3 mod 2 == 1'. " + "See issue #48 for more information.");
          break;
      }

      return value;
    };
  }(),
  buildString: function buildString(quote, literal) {
    quote = String(quote)[0];
    literal = String(literal);
    var built = '';
    if (literal[0] !== quote || literal[literal.length - 1] !== quote) throw new InternalError("Unexpected internal error: String literal doesn't begin/end with the right quotation mark.");

    for (var i = 1; i < literal.length - 1; i++) {
      if (literal[i] === "\\") {
        i++;
        if (i >= literal.length - 1) throw new InternalError("Unexpected internal error: Unescaped backslash at the end of string literal.");
        if (literal[i] === "\\") built += '\\';else if (literal[i] === quote) built += quote;else throw new InternalError("Unexpected internal error: Invalid escaped character in string literal: ".concat(literal[i]));
      } else if (literal[i] === quote) {
        throw new InternalError("Unexpected internal error: String literal contains unescaped quotation mark.");
      } else {
        built += literal[i];
      }
    }

    return built;
  },
  reduceRelation: function reduceRelation(arr) {
    var declarations = [];
    var comparisons = [];
    var previousExpression = flatten([arr[0]]).join('');
    var j = 0;

    for (var i = 1; i < arr.length - 1; i += 2) {
      var expr = flatten([arr[i + 1]]).join('');
      var tempVar = "tmp".concat(j++);
      comparisons.push("ops[\"".concat(arr[i], "\"](").concat(previousExpression, ", ").concat(tempVar, " = ").concat(expr, ")"));
      previousExpression = tempVar;
      declarations.push(tempVar);
    }

    return "(function(){ var ".concat(declarations.join(', '), "; return ").concat(comparisons.join(' && '), ";})()");
  }
};
parser.yy = Object.create(std);
/**
 * A custom prop function which doesn't throw an UnknownPropertyError
 * if the user tries to access a property of `undefined` and `null`,
 * but instead returns `unknown` or `null`. This effectively turns
 * `a of b` into `b.?a`. You can use this function using the following
 * code:
 * ```
 * import {
 *   compileExpression,
 *   useOptionalChaining
 * } from 'filtrex'
 *
 * const expr = "foo of bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useOptionalChaining
 * });
 *
 * fn({ bar: null }) // → null
 * ```
 */

function useOptionalChaining(name, get, obj, type) {
  if (obj === null || obj === undefined) return obj;
  return get(name);
}
/**
 * A custom prop function which treats dots inside a symbol
 * as property accessors. If you want to use the `foo.bar`
 * syntax to access properties instead of the default
 * `bar of foo`, you can use this function using the following
 * code:
 * ```
 * import {
 *   compileExpression,
 *   useDotAccessOperator
 * } from 'filtrex'
 *
 * const expr = "foo.bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useDotAccessOperator
 * });
 *
 * fn({ foo: { bar: 42 } }) // → 42
 * ```
 */


function useDotAccessOperator(name, get, obj, type) {
  // ignore dots inside escaped symbol
  if (type === 'single-quoted') return get(name);
  var parts = name.split('.');

  var _iterator = _createForOfIteratorHelper(parts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _obj;

      var propertyName = _step.value;

      if (hasOwnProperty((_obj = obj) !== null && _obj !== void 0 ? _obj : {}, propertyName)) {
        obj = obj[propertyName];
      } else {
        throw new UnknownPropertyError(propertyName);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return obj;
}
/**
 * A custom prop function which combines `useOptionalChaining` and `useDotAccessOperator`.
 * The user can use both `foo of bar` and `bar.foo`, both have optional chaining.
 * You can use this function using the following code:
 * ```
 * import {
 *   compileExpression,
 *   useDotAccessOperatorAndOptionalChaining
 * } from 'filtrex'
 *
 * const expr = "foo.bar"
 *
 * const fn = compileExpression(expr, {
 *   customProp: useDotAccessOperatorAndOptionalChaining
 * });
 *
 * fn({ foo: null }) // → null
 * ```
 */


function useDotAccessOperatorAndOptionalChaining(name, get, obj, type) {
  if (obj === null || obj === undefined) return obj; // ignore dots inside escaped symbol

  if (type === 'single-quoted') return get(name);
  var parts = name.split('.');

  var _iterator2 = _createForOfIteratorHelper(parts),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var propertyName = _step2.value;

      if (obj === null || obj === undefined) {
        return obj;
      } else {
        obj = obj[propertyName];
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return obj;
}
/**
 * A simple, safe, JavaScript expression engine, allowing end-users to enter arbitrary expressions without p0wning you.
 *
 * @example
 * // Input from user (e.g. search filter)
 * let expression = 'transactions <= 5 and abs(profit) > 20.5';
 *
 * // Compile expression to executable function
 * let myfilter = compileExpression(expression);
 *
 * // Execute function
 * myfilter({transactions: 3, profit:-40.5}); // returns 1
 * myfilter({transactions: 3, profit:-14.5}); // returns 0
 *
 * @param expression
 * The expression to be parsed. Under the hood, the expression gets compiled to a clean and fast JavaScript function.
 * There are only 2 types: numbers and strings. Numbers may be floating point or integers. Boolean logic is applied
 * on the truthy value of values (e.g. any non-zero number is true, any non-empty string is true, otherwise false).
 * Examples of numbers: `43`, `-1.234`; example of a string: `"hello"`; example of external data variable: `foo`, `a.b.c`,
 * `'foo-bar'`.
 * You can use the following operations:
 *  * `x + y` Add
 *  * `x - y` Subtract
 *  * `x * y` Multiply
 *  * `x / y` Divide
 *  * `x ^ y` Power
 *  * `x mod y` Modulo
 *  * `x == y` Equals
 *  * `x < y` Less than
 *  * `x <= y` Less than or equal to
 *  * `x > y` Greater than
 *  * `x >= y` Greater than or equal to
 *  * `x == y <= z` Chained relation, equivalent to `(x == y and y <= z)`
 *  * `x of y` Get property x of object y
 *  * `x in (a, b, c)` Equivalent to `(x == a or x == b or x == c)`
 *  * `x not in (a, b, c)` Equivalent to `(x != a and x != b and x != c)`
 *  * `x or y` Boolean or
 *  * `x and y` Boolean and
 *  * `not x` Boolean not
 *  * `if x then y else z` If boolean x, value y, else z
 *  * `( x )` Explicity operator precedence
 *  * `( x, y, z )` Array of elements x, y and z
 *  * `abs(x)` Absolute value
 *  * `ceil(x)` Round floating point up
 *  * `floor(x)` Round floating point down
 *  * `log(x)` Natural logarithm
 *  * `log2(x)` Binary logarithm
 *  * `log10(x)` Decadic logarithm
 *  * `max(a, b, c...)` Max value (variable length of args)
 *  * `min(a, b, c...)` Min value (variable length of args)
 *  * `round(x)` Round floating point
 *  * `sqrt(x)` Square root
 *  * `exists(x)` True if `x` is neither `undefined` nor `null`
 *  * `empty(x)` True if `x` doesn't exist, it is an empty string or empty array
 *  * `myFooBarFunction(x)` Custom function defined in `options.extraFunctions`
 */


function compileExpression(expression, options) {
  var _constants;

  // Check and coerce arguments
  if (arguments.length > 2) throw new TypeError('Too many arguments.');
  options = _typeof(options) === "object" ? options : {};
  var knownOptions = ['extraFunctions', 'constants', 'customProp', 'operators'];
  var _options = options,
      extraFunctions = _options.extraFunctions,
      constants = _options.constants,
      customProp = _options.customProp,
      operators = _options.operators;

  for (var _i = 0, _Object$keys = Object.keys(options); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (!knownOptions.includes(key)) throw new UnknownOptionError(key);
  } // Functions available to the expression


  var functions = {
    abs: Math.abs,
    ceil: Math.ceil,
    floor: Math.floor,
    log: Math.log,
    log2: Math.log2,
    log10: Math.log10,
    max: Math.max,
    min: Math.min,
    round: Math.round,
    sqrt: Math.sqrt,
    exists: function exists(v) {
      return v !== undefined && v !== null;
    },
    empty: function empty(v) {
      return v === undefined || v === null || v === '' || Array.isArray(v) && v.length === 0;
    }
  };

  if (extraFunctions) {
    for (var _i2 = 0, _Object$keys2 = Object.keys(extraFunctions); _i2 < _Object$keys2.length; _i2++) {
      var name = _Object$keys2[_i2];
      functions[name] = extraFunctions[name];
    }
  }

  var defaultOperators = {
    '+': function _(a, b) {
      return numstr(a) + numstr(b);
    },
    '-': function _(a, b) {
      return b === undefined ? -num(a) : num(a) - num(b);
    },
    '*': function _(a, b) {
      return num(a) * num(b);
    },
    '/': function _(a, b) {
      return num(a) / num(b);
    },
    '^': function _(a, b) {
      return Math.pow(num(a), num(b));
    },
    'mod': function mod(a, b) {
      return _mod(num(a), num(b));
    },
    '==': function _(a, b) {
      return a === b;
    },
    '!=': function _(a, b) {
      return a !== b;
    },
    '<': function _(a, b) {
      return num(a) < num(b);
    },
    '<=': function _(a, b) {
      return num(a) <= num(b);
    },
    '>=': function _(a, b) {
      return num(a) >= num(b);
    },
    '>': function _(a, b) {
      return num(a) > num(b);
    },
    '~=': function _(a, b) {
      return RegExp(str(b)).test(str(a));
    }
  };

  if (operators) {
    for (var _i3 = 0, _Object$keys3 = Object.keys(operators); _i3 < _Object$keys3.length; _i3++) {
      var _name = _Object$keys3[_i3];
      defaultOperators[_name] = operators[_name];
    }
  }

  operators = defaultOperators;
  constants = (_constants = constants) !== null && _constants !== void 0 ? _constants : {}; // Compile the expression

  var js = flatten(parser.parse(expression));
  js.unshift('return ');
  js.push(';'); // Metaprogramming functions

  function nakedProp(name, obj, type) {
    if (hasOwnProperty(obj !== null && obj !== void 0 ? obj : {}, name)) return obj[name];
    throw new UnknownPropertyError(name);
  }

  function safeGetter(obj) {
    return function get(name) {
      if (hasOwnProperty(obj !== null && obj !== void 0 ? obj : {}, name)) return obj[name];
      throw new UnknownPropertyError(name);
    };
  }

  if (typeof customProp === 'function') {
    nakedProp = function nakedProp(name, obj, type) {
      return customProp(name, safeGetter(obj), obj, type);
    };
  }

  function createCall(fns) {
    return function call(_ref) {
      var name = _ref.name;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (hasOwnProperty(fns, name) && typeof fns[name] === "function") return fns[name].apply(fns, args);
      throw new UnknownFunctionError(name);
    };
  }

  function prop(_ref2, obj) {
    var name = _ref2.name,
        type = _ref2.type;
    if (type === 'unescaped' && hasOwnProperty(constants, name)) return constants[name];
    return nakedProp(name, obj, type);
  } // Patch together and return


  var func = new Function('call', 'ops', 'std', 'prop', 'data', js.join(''));
  return function (data) {
    try {
      return func(createCall(functions), operators, std, prop, data);
    } catch (e) {
      return e;
    }
  };
}

exports.compileExpression = compileExpression;
exports.useDotAccessOperator = useDotAccessOperator;
exports.useDotAccessOperatorAndOptionalChaining = useDotAccessOperatorAndOptionalChaining;
exports.useOptionalChaining = useOptionalChaining;
