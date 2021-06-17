'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* Jison generated parser */
var _parser = (function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "expressions": 3,
            "e": 4,
            "EOF": 5,
            "-": 6,
            "+": 7,
            "*": 8,
            "/": 9,
            "%": 10,
            "^": 11,
            "and": 12,
            "or": 13,
            "not": 14,
            "Relational": 15,
            "if": 16,
            "then": 17,
            "else": 18,
            "in": 19,
            "(": 20,
            ")": 21,
            "Arguments": 22,
            ",": 23,
            "Number": 24,
            "Symbol": 25,
            "String": 26,
            "of": 27,
            "==": 28,
            "!=": 29,
            "~=": 30,
            "<": 31,
            "<=": 32,
            ">=": 33,
            ">": 34,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            6: "-",
            7: "+",
            8: "*",
            9: "/",
            10: "%",
            11: "^",
            12: "and",
            13: "or",
            14: "not",
            16: "if",
            17: "then",
            18: "else",
            19: "in",
            20: "(",
            21: ")",
            23: ",",
            24: "Number",
            25: "Symbol",
            26: "String",
            27: "of",
            28: "==",
            29: "!=",
            30: "~=",
            31: "<",
            32: "<=",
            33: ">=",
            34: ">"
        },
        productions_: [0, [3, 2],
            [4, 2],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 3],
            [4, 2],
            [4, 3],
            [4, 6],
            [4, 3],
            [4, 4],
            [4, 3],
            [4, 5],
            [4, 1],
            [4, 1],
            [4, 1],
            [4, 3],
            [4, 3],
            [4, 4],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [15, 1],
            [22, 1],
            [22, 3]
        ],
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
                    this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
                    break;
                case 9:
                    this.$ = ["(", "", "std.coerceBoolean", "", $$[$0 - 2], " && ", "std.coerceBoolean", "", $$[$0], "", ")"];
                    break;
                case 10:
                    this.$ = ["(", "", "std.coerceBoolean", "", $$[$0 - 2], " || ", "std.coerceBoolean", "", $$[$0], "", ")"];
                    break;
                case 11:
                    this.$ = ["(", "! ", "std.coerceBoolean", "", $$[$0], "", ")"];
                    break;
                case 12:
                    this.$ = ["(", "ops['", $$[$0 - 1], "'](", $$[$0 - 2], ", ", $$[$0], ")", ")"];
                    break;
                case 13:
                    this.$ = ["(", "", "std.coerceBoolean", "", $$[$0 - 4], " ? ", $$[$0 - 2], " : ", $$[$0], "", ")"];
                    break;
                case 14:
                    this.$ = ["(", "std.isSubset(", $$[$0 - 2], ", ", $$[$0], ")", ")"];
                    break;
                case 15:
                    this.$ = ["(", "!std.isSubset(", $$[$0 - 3], ", ", $$[$0], ")", ")"];
                    break;
                case 16:
                    this.$ = ["(", "", $$[$0 - 1], "", ")"];
                    break;
                case 17:
                    this.$ = ["(", "[ ", $$[$0 - 3], ", ", $$[$0 - 1], " ]", ")"];
                    break;
                case 18:
                    this.$ = ["(", "", $$[$0], "", ")"];
                    break;
                case 19:
                    this.$ = ["(", "prop(", $$[$0], ", data)", ")"];
                    break;
                case 20:
                    this.$ = ["(", "", $$[$0], "", ")"];
                    break;
                case 21:
                    this.$ = ["(", "prop(", $$[$0 - 2], ", ", $$[$0], ")", ")"];
                    break;
                case 22:
                    this.$ = ["(", "call(", $$[$0 - 2], ")", ")"];
                    break;
                case 23:
                    this.$ = ["(", "call(", $$[$0 - 3], ", ", $$[$0 - 1], ")", ")"];
                    break;
                case 24:
                    this.$ = ["=="];
                    break;
                case 25:
                    this.$ = ["!="];
                    break;
                case 26:
                    this.$ = ["~="];
                    break;
                case 27:
                    this.$ = ["<"];
                    break;
                case 28:
                    this.$ = ["<="];
                    break;
                case 29:
                    this.$ = [">="];
                    break;
                case 30:
                    this.$ = [">"];
                    break;
                case 31:
                    this.$ = ["", $$[$0], ""];
                    break;
                case 32:
                    this.$ = ["", $$[$0 - 2], ", ", $$[$0], ""];
                    break;
            }
        },
        table: [{
            3: 1,
            4: 2,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            1: [3]
        }, {
            5: [1, 10],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            19: [1, 20],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            4: 29,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 30,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 31,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 32,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            22: 33,
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
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
            14: [2, 18],
            17: [2, 18],
            18: [2, 18],
            19: [2, 18],
            21: [2, 18],
            23: [2, 18],
            28: [2, 18],
            29: [2, 18],
            30: [2, 18],
            31: [2, 18],
            32: [2, 18],
            33: [2, 18],
            34: [2, 18]
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
            14: [2, 19],
            17: [2, 19],
            18: [2, 19],
            19: [2, 19],
            20: [1, 35],
            21: [2, 19],
            23: [2, 19],
            27: [1, 34],
            28: [2, 19],
            29: [2, 19],
            30: [2, 19],
            31: [2, 19],
            32: [2, 19],
            33: [2, 19],
            34: [2, 19]
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
            14: [2, 20],
            17: [2, 20],
            18: [2, 20],
            19: [2, 20],
            21: [2, 20],
            23: [2, 20],
            28: [2, 20],
            29: [2, 20],
            30: [2, 20],
            31: [2, 20],
            32: [2, 20],
            33: [2, 20],
            34: [2, 20]
        }, {
            1: [2, 1]
        }, {
            4: 36,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 37,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 38,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 39,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 40,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 41,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 42,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 43,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 44,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 45,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            19: [1, 46]
        }, {
            6: [2, 24],
            14: [2, 24],
            16: [2, 24],
            20: [2, 24],
            24: [2, 24],
            25: [2, 24],
            26: [2, 24]
        }, {
            6: [2, 25],
            14: [2, 25],
            16: [2, 25],
            20: [2, 25],
            24: [2, 25],
            25: [2, 25],
            26: [2, 25]
        }, {
            6: [2, 26],
            14: [2, 26],
            16: [2, 26],
            20: [2, 26],
            24: [2, 26],
            25: [2, 26],
            26: [2, 26]
        }, {
            6: [2, 27],
            14: [2, 27],
            16: [2, 27],
            20: [2, 27],
            24: [2, 27],
            25: [2, 27],
            26: [2, 27]
        }, {
            6: [2, 28],
            14: [2, 28],
            16: [2, 28],
            20: [2, 28],
            24: [2, 28],
            25: [2, 28],
            26: [2, 28]
        }, {
            6: [2, 29],
            14: [2, 29],
            16: [2, 29],
            20: [2, 29],
            24: [2, 29],
            25: [2, 29],
            26: [2, 29]
        }, {
            6: [2, 30],
            14: [2, 30],
            16: [2, 30],
            20: [2, 30],
            24: [2, 30],
            25: [2, 30],
            26: [2, 30]
        }, {
            5: [2, 2],
            6: [2, 2],
            7: [2, 2],
            8: [2, 2],
            9: [2, 2],
            10: [2, 2],
            11: [2, 2],
            12: [2, 2],
            13: [2, 2],
            14: [2, 2],
            15: 19,
            17: [2, 2],
            18: [2, 2],
            19: [2, 2],
            21: [2, 2],
            23: [2, 2],
            28: [2, 2],
            29: [2, 2],
            30: [2, 2],
            31: [2, 2],
            32: [2, 2],
            33: [2, 2],
            34: [2, 2]
        }, {
            5: [2, 11],
            6: [2, 11],
            7: [2, 11],
            8: [2, 11],
            9: [2, 11],
            10: [2, 11],
            11: [2, 11],
            12: [2, 11],
            13: [2, 11],
            14: [2, 11],
            15: 19,
            17: [2, 11],
            18: [2, 11],
            19: [2, 11],
            21: [2, 11],
            23: [2, 11],
            28: [2, 11],
            29: [2, 11],
            30: [2, 11],
            31: [2, 11],
            32: [2, 11],
            33: [2, 11],
            34: [2, 11]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            17: [1, 47],
            19: [1, 20],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            19: [1, 20],
            21: [1, 48],
            23: [2, 31],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            23: [1, 49]
        }, {
            4: 50,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 53,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            21: [1, 51],
            22: 52,
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            5: [2, 3],
            6: [2, 3],
            7: [2, 3],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [2, 3],
            13: [2, 3],
            14: [1, 21],
            15: 19,
            17: [2, 3],
            18: [2, 3],
            19: [2, 3],
            21: [2, 3],
            23: [2, 3],
            28: [2, 3],
            29: [2, 3],
            30: [2, 3],
            31: [2, 3],
            32: [2, 3],
            33: [2, 3],
            34: [2, 3]
        }, {
            5: [2, 4],
            6: [2, 4],
            7: [2, 4],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [2, 4],
            13: [2, 4],
            14: [1, 21],
            15: 19,
            17: [2, 4],
            18: [2, 4],
            19: [2, 4],
            21: [2, 4],
            23: [2, 4],
            28: [2, 4],
            29: [2, 4],
            30: [2, 4],
            31: [2, 4],
            32: [2, 4],
            33: [2, 4],
            34: [2, 4]
        }, {
            5: [2, 5],
            6: [2, 5],
            7: [2, 5],
            8: [2, 5],
            9: [2, 5],
            10: [2, 5],
            11: [1, 16],
            12: [2, 5],
            13: [2, 5],
            14: [1, 21],
            15: 19,
            17: [2, 5],
            18: [2, 5],
            19: [2, 5],
            21: [2, 5],
            23: [2, 5],
            28: [2, 5],
            29: [2, 5],
            30: [2, 5],
            31: [2, 5],
            32: [2, 5],
            33: [2, 5],
            34: [2, 5]
        }, {
            5: [2, 6],
            6: [2, 6],
            7: [2, 6],
            8: [2, 6],
            9: [2, 6],
            10: [2, 6],
            11: [1, 16],
            12: [2, 6],
            13: [2, 6],
            14: [1, 21],
            15: 19,
            17: [2, 6],
            18: [2, 6],
            19: [2, 6],
            21: [2, 6],
            23: [2, 6],
            28: [2, 6],
            29: [2, 6],
            30: [2, 6],
            31: [2, 6],
            32: [2, 6],
            33: [2, 6],
            34: [2, 6]
        }, {
            5: [2, 7],
            6: [2, 7],
            7: [2, 7],
            8: [2, 7],
            9: [2, 7],
            10: [2, 7],
            11: [1, 16],
            12: [2, 7],
            13: [2, 7],
            14: [1, 21],
            15: 19,
            17: [2, 7],
            18: [2, 7],
            19: [2, 7],
            21: [2, 7],
            23: [2, 7],
            28: [2, 7],
            29: [2, 7],
            30: [2, 7],
            31: [2, 7],
            32: [2, 7],
            33: [2, 7],
            34: [2, 7]
        }, {
            5: [2, 8],
            6: [2, 8],
            7: [2, 8],
            8: [2, 8],
            9: [2, 8],
            10: [2, 8],
            11: [2, 8],
            12: [2, 8],
            13: [2, 8],
            14: [1, 21],
            15: 19,
            17: [2, 8],
            18: [2, 8],
            19: [2, 8],
            21: [2, 8],
            23: [2, 8],
            28: [2, 8],
            29: [2, 8],
            30: [2, 8],
            31: [2, 8],
            32: [2, 8],
            33: [2, 8],
            34: [2, 8]
        }, {
            5: [2, 9],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [2, 9],
            13: [2, 9],
            14: [1, 21],
            15: 19,
            17: [2, 9],
            18: [2, 9],
            19: [1, 20],
            21: [2, 9],
            23: [2, 9],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            5: [2, 10],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [2, 10],
            14: [1, 21],
            15: 19,
            17: [2, 10],
            18: [2, 10],
            19: [1, 20],
            21: [2, 10],
            23: [2, 10],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            5: [2, 12],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [2, 12],
            13: [2, 12],
            14: [1, 21],
            15: 19,
            17: [2, 12],
            18: [2, 12],
            19: [2, 12],
            21: [2, 12],
            23: [2, 12],
            28: [2, 12],
            29: [2, 12],
            30: [2, 12],
            31: [2, 12],
            32: [2, 12],
            33: [2, 12],
            34: [2, 12]
        }, {
            5: [2, 14],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [2, 14],
            13: [2, 14],
            14: [1, 21],
            15: 19,
            17: [2, 14],
            18: [2, 14],
            19: [2, 14],
            21: [2, 14],
            23: [2, 14],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            4: 54,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 55,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
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
            14: [2, 16],
            17: [2, 16],
            18: [2, 16],
            19: [2, 16],
            21: [2, 16],
            23: [2, 16],
            28: [2, 16],
            29: [2, 16],
            30: [2, 16],
            31: [2, 16],
            32: [2, 16],
            33: [2, 16],
            34: [2, 16]
        }, {
            4: 56,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
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
            14: [2, 21],
            15: 19,
            17: [2, 21],
            18: [2, 21],
            19: [2, 21],
            21: [2, 21],
            23: [2, 21],
            28: [2, 21],
            29: [2, 21],
            30: [2, 21],
            31: [2, 21],
            32: [2, 21],
            33: [2, 21],
            34: [2, 21]
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
            14: [2, 22],
            17: [2, 22],
            18: [2, 22],
            19: [2, 22],
            21: [2, 22],
            23: [2, 22],
            28: [2, 22],
            29: [2, 22],
            30: [2, 22],
            31: [2, 22],
            32: [2, 22],
            33: [2, 22],
            34: [2, 22]
        }, {
            21: [1, 57],
            23: [1, 58]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            19: [1, 20],
            21: [2, 31],
            23: [2, 31],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
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
            14: [2, 15],
            15: 19,
            17: [2, 15],
            18: [2, 15],
            19: [2, 15],
            21: [2, 15],
            23: [2, 15],
            28: [2, 15],
            29: [2, 15],
            30: [2, 15],
            31: [2, 15],
            32: [2, 15],
            33: [2, 15],
            34: [2, 15]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            18: [1, 59],
            19: [1, 20],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            19: [1, 20],
            21: [1, 60],
            23: [2, 32],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
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
            14: [2, 23],
            17: [2, 23],
            18: [2, 23],
            19: [2, 23],
            21: [2, 23],
            23: [2, 23],
            28: [2, 23],
            29: [2, 23],
            30: [2, 23],
            31: [2, 23],
            32: [2, 23],
            33: [2, 23],
            34: [2, 23]
        }, {
            4: 61,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
        }, {
            4: 62,
            6: [1, 3],
            14: [1, 4],
            16: [1, 5],
            20: [1, 6],
            24: [1, 7],
            25: [1, 8],
            26: [1, 9]
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
            14: [2, 17],
            17: [2, 17],
            18: [2, 17],
            19: [2, 17],
            21: [2, 17],
            23: [2, 17],
            28: [2, 17],
            29: [2, 17],
            30: [2, 17],
            31: [2, 17],
            32: [2, 17],
            33: [2, 17],
            34: [2, 17]
        }, {
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            19: [1, 20],
            21: [2, 32],
            23: [2, 32],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }, {
            5: [2, 13],
            6: [1, 12],
            7: [1, 11],
            8: [1, 13],
            9: [1, 14],
            10: [1, 15],
            11: [1, 16],
            12: [1, 17],
            13: [1, 18],
            14: [1, 21],
            15: 19,
            17: [2, 13],
            18: [2, 13],
            19: [1, 20],
            21: [2, 13],
            23: [2, 13],
            28: [1, 22],
            29: [1, 23],
            30: [1, 24],
            31: [1, 25],
            32: [1, 26],
            33: [1, 27],
            34: [1, 28]
        }],
        defaultActions: {
            10: [2, 1]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this,
                stack = [0],
                vstack = [null], // semantic value stack
                lstack = [], // location stack
                table = this.table,
                yytext = '',
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;

            //this.reductionCount = this.shiftCount = 0;

            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == 'undefined')
                this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);

            var ranges = this.lexer.options && this.lexer.options.ranges;

            if (typeof this.yy.parseError === 'function')
                this.parseError = this.yy.parseError;

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

            var symbol, preErrorSymbol, state, action, r, yyval = {},
                p, len, newState, expected;
            while (true) {
                // retreive state number from top of stack
                state = stack[stack.length - 1];

                // use default actions if available
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                } else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    // read action for current state and first input
                    action = table[state] && table[state][symbol];
                }

                // handle parse error
                if (typeof action === 'undefined' || !action.length || !action[0]) {

                        var errStr = '';
                        if (!recovering) {
                            // Report error
                            expected = [];
                            for (p in table[state])
                                if (this.terminals_[p] && p > 2) {
                                    expected.push("'" + this.terminals_[p] + "'");
                                }
                            if (this.lexer.showPosition) {
                                errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                            } else {
                                errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " +
                                    (symbol == 1 /*EOF*/ ? "end of input" :
                                        ("'" + (this.terminals_[symbol] || symbol) + "'"));
                            }
                            this.parseError(errStr, {
                                text: this.lexer.match,
                                token: this.terminals_[symbol] || symbol,
                                line: this.lexer.yylineno,
                                loc: yyloc,
                                expected: expected
                            });
                        }

                        // just recovered from another error
                        if (recovering == 3) {
                            if (symbol == EOF) {
                                throw new Error(errStr || 'Parsing halted.');
                            }

                            // discard current lookahead and grab another
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            symbol = lex();
                        }

                        // try to recover from error
                        while (1) {
                            // check for error recovery rule in this state
                            if ((TERROR.toString()) in table[state]) {
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
                    }

                // this shouldn't happen, unless resolve defaults are off
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }

                switch (action[0]) {

                    case 1: // shift
                        //this.shiftCount++;

                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]); // push state
                        symbol = null;
                        if (!preErrorSymbol) { // normal execution/no error
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0)
                                recovering--;
                        } else { // error just occurred, resume old lookahead f/ before error
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;

                    case 2: // reduce
                        //this.reductionCount++;

                        len = this.productions_[action[1]][1];

                        // perform semantic action
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
                        }

                        // pop off stack
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }

                        stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        // goto new state = table[STATE][NONTERMINAL]
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;

                    case 3: // accept
                        return true;
                }

            }

            return true;
        }
    };
    var lexer = (function() {
        var lexer = ({
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                } else {
                    throw new Error(str);
                }
            },
            setInput: function(input) {
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
            input: function() {
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
            unput: function(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);

                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
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
                    last_column: lines ?
                        (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };

                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                return this;
            },
            more: function() {
                this._more = true;
                return this;
            },
            less: function(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function() {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) this.done = true;

                var token,
                    match,
                    tempMatch,
                    index,
                    lines;
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
                    if (token) return token;
                    else return;
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
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        });
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
                    return "%";
                case 6:
                    return "(";
                case 7:
                    return ")";
                case 8:
                    return ",";
                case 9:
                    return "==";
                case 10:
                    return "!=";
                case 11:
                    return "~=";
                case 12:
                    return ">=";
                case 13:
                    return "<=";
                case 14:
                    return "<";
                case 15:
                    return ">";
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
                    break;
                case 25:
                    return "Number";
                case 26:
                    yy_.yytext = JSON.stringify(yy_.yytext);
                    return "Symbol";
                case 27:
                    yy_.yytext = yy.buildString("'", yy_.yytext);
                    return "Symbol";
                case 28:
                    yy_.yytext = yy.buildString('"', yy_.yytext);
                    return "String";
                case 29:
                    return "EOF";
            }
        };
        lexer.rules = [/^(?:\*)/, /^(?:\/)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:\%)/, /^(?:\()/, /^(?:\))/, /^(?:\,)/, /^(?:==)/, /^(?:\!=)/, /^(?:\~=)/, /^(?:>=)/, /^(?:<=)/, /^(?:<)/, /^(?:>)/, /^(?:and[^\w])/, /^(?:or[^\w])/, /^(?:not[^\w])/, /^(?:in[^\w])/, /^(?:of[^\w])/, /^(?:if[^\w])/, /^(?:then[^\w])/, /^(?:else[^\w])/, /^(?:\s+)/, /^(?:[0-9]+(?:\.[0-9]+)?(?![0-9\.]))/, /^(?:[a-zA-Z$_][\.a-zA-Z0-9$_]*)/, /^(?:'(?:\\'|\\\\|[^'\\])*')/, /^(?:"(?:\\"|\\\\|[^"\\])*")/, /^(?:$)/];
        lexer.conditions = {
            "INITIAL": {
                "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                "inclusive": true
            }
        };
        return lexer;
    })();
    parser.lexer = lexer;

    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
const parser = _parser;
_parser.Parser;

/**
 * Determines whether an object has a property with the specified name.
 * @param {object} obj the object to be checked
 * @param {string|number} prop property name
 */
function hasOwnProperty(obj, prop) {
    if (typeof obj === "object" || typeof obj === "function") {
        return Object.prototype.hasOwnProperty.call(obj, prop)
    }

    return false
}


/**
 * Mathematically correct modulo
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function mod(a, b) {
    return (a % b + b) % b
}


/**
 * Converts instances of Number, String and Boolean to primitives
 */
function unbox(value) {
    if (typeof value !== 'object')
        return value

    if (value instanceof Number || value instanceof String || value instanceof Boolean)
        return value.valueOf()
}


/**
 * Unboxes value and unwraps it from a single-element array
 */
function unwrap(value) {
    if (Array.isArray(value) && value.length === 1)
        value = value[0];

    return unbox(value)
}


/**
 * Returns the type of a value in a neat, user-readable way
 */
function prettyType(value) {
    value = unwrap(value);

    if (value === undefined) return 'undefined'
    if (value === null) return 'null'
    if (value === true) return 'true'
    if (value === false) return 'false'

    if (typeof value === 'number') return 'number'
    if (typeof value === 'string') return 'text'

    if (typeof value !== 'object' && typeof value !== 'function')
        return 'unknown type'

    if (Array.isArray(value)) return 'list'

    return 'object'
}



// Type assertions/coertions

function num(value) {
    value = unwrap(value);
    if (typeof value === 'number') return value

    throw new TypeError(`Expected a number, but got a ${prettyType(value)} instead.`)
}

function str(value) {
    value = unwrap(value);
    if (typeof value === 'string') return value

    throw new TypeError(`Expected a text, but got a ${prettyType(value)} instead.`)
}

function numstr(value) {
    value = unwrap(value);
    if (typeof value === 'string' || typeof value === 'number') return value

    throw new TypeError(`Expected a text or a number, but got a ${prettyType(value)} instead.`)
}

function bool(value) {
    value = unwrap(value);
    if (typeof value === 'boolean') return value

    throw new TypeError(`Expected a logical value (“true” or “false”), but got a ${prettyType(value)} instead.`)
}

function arr(value) {
    if (value === undefined || value === null) {
        throw new TypeError(`Expected a list, but got ${value} instead.`)
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
    const stack = [...input];
    const res = [];
    while(stack.length) {
        // pop value from stack
        const next = stack.pop();
        if(Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

// the parser is dynamically generated from generateParser.js at compile time

// Shared utility functions
const std =
{

    isfn: function(fns, funcName) {
        return hasOwnProperty(fns, funcName) && typeof fns[funcName] === "function";
    },

    unknown: function(funcName) {
        throw new ReferenceError('Unknown function: ' + funcName + '()');
    },

    coerceArray: arr,
    coerceNumber: num,
    coerceNumberOrString: numstr,
    coerceBoolean: bool,

    isSubset: function(a, b) {
        const A = arr(a);
        const B = arr(b);
        return A.every( val => B.includes(val) );
    },

    buildString: function(quote, literal)
    {
        quote = String(quote)[0];
        literal = String(literal);
        let built = '';

        if (literal[0] !== quote || literal[literal.length-1] !== quote)
            throw new Error(`Unexpected internal error: String literal doesn't begin/end with the right quotation mark.`);

        for (let i = 1; i < literal.length - 1; i++)
        {
            if (literal[i] === "\\")
            {
                i++;
                if (i >= literal.length - 1) throw new Error(`Unexpected internal error: Unescaped backslash at the end of string literal.`);

                if (literal[i] === "\\") built += '\\';
                else if (literal[i] === quote) built += quote;
                else throw new Error(`Unexpected internal error: Invalid escaped character in string literal: ${literal[i]}`);
            }
            else if (literal[i] === quote)
            {
                throw new Error(`Unexpected internal error: String literal contains unescaped quotation mark.`);
            }
            else
            {
                built += literal[i];
            }
        }

        return JSON.stringify(built);
    }
};

parser.yy = Object.create(std);

/**
 * Filtrex provides compileExpression() to compile user expressions to JavaScript.
 *
 * See https://github.com/joewalnes/filtrex for tutorial, reference and examples.
 * MIT License.
 *
 * Includes Jison by Zachary Carter. See http://jison.org/
 *
 * -Joe Walnes
 */
function compileExpression(expression, options) {

    // Check and coerce arguments

    if (arguments.length > 2) throw new TypeError('Too many arguments.');

    options = typeof options === "object" ? options : {};
    let {extraFunctions, customProp, operators} = options;
    for (const key of Object.keys(options))
    {
        if (!(["extraFunctions", "customProp", "operators"].includes(key)))
            throw new TypeError(`Unknown option: ${key}`);
    }



    // Functions available to the expression

    let functions = {
        abs: Math.abs,
        ceil: Math.ceil,
        floor: Math.floor,
        log: Math.log,
        max: Math.max,
        min: Math.min,
        random: Math.random,
        round: Math.round,
        sqrt: Math.sqrt,
        exists: (v) => v !== undefined && v !== null,
        empty: (v) => v === undefined || v === null || v === '' || Array.isArray(v) && v.length === 0
    };

    if (extraFunctions) {
        for (const name of Object.keys(extraFunctions)) {
            functions[name] = extraFunctions[name];
        }
    }

    let defaultOperators = {
        '+': (a, b) => numstr(a) + numstr(b),
        '-': (a, b) => b === undefined ? -num(a) : num(a) - num(b),
        '*': (a, b) => num(a) * num(b),
        '/': (a, b) => num(a) / num(b),

        '%': (a, b) => mod(num(a), num(b)),
        '^': (a, b) => Math.pow(num(a), num(b)),

        '==': (a, b) => a === b,
        '!=': (a, b) => a !== b,

        '<': (a, b) => num(a) < num(b),
        '<=': (a, b) => num(a) <= num(b),
        '>=': (a, b) => num(a) >= num(b),
        '>': (a, b) => num(a) > num(b),

        '~=': (a, b) => RegExp(str(b)).test(str(a))
    };

    if (operators) {
        for (const name of Object.keys(operators)) {
            defaultOperators[name] = operators[name];
        }
    }

    operators = defaultOperators;



    // Compile the expression

    let js = flatten( parser.parse(expression) );
    js.unshift('return ');
    js.push(';');


    // Metaprogramming functions

    function prop(name, obj) {
        if (hasOwnProperty(obj||{}, name))
            return obj[name];

        throw new ReferenceError(`Property “${name}” does not exist.`)
    }

    function safeGetter(obj) {
        return function get(name) {
            if (hasOwnProperty(obj||{}, name))
                return obj[name];

            throw new ReferenceError(`Property “${name}” does not exist.`)
        }
    }

    if (typeof customProp === 'function') {
        prop = (name, obj) => customProp(name, safeGetter(obj), obj);
    }

    function createCall(fns) {
        return function call(name, ...args) {
            if (hasOwnProperty(fns, name) && typeof fns[name] === "function")
                return fns[name](...args)

            throw new ReferenceError(`Unknown function: ${name}()`);
        }
    }



    // Patch together and return

    let func = new Function('call', 'ops', 'std', 'prop', 'data', js.join(''));

    return function(data) {
        try {
            return func(createCall(functions), operators, std, prop, data);
        }
        catch (e)
        {
            return e;
        }
    };
}

exports.compileExpression = compileExpression;
