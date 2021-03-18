const Jison = require("./lib/jison").Jison;

function code(args, skipParentheses) {
    var argsJs = args.map(function(a) {
        return typeof(a) == 'number' ? ('$' + a) : JSON.stringify(a);
    }).join(',');

    return skipParentheses
            ? '$$ = [' + argsJs + '];'
            : '$$ = ["(", ' + argsJs + ', ")"];';
}

var grammar = {
    // Lexical tokens
    lex: {
        rules: [
            ['\\*', 'return "*";'],
            ['\\/', 'return "/";'],
            ['-'  , 'return "-";'],
            ['\\+', 'return "+";'],
            ['\\^', 'return "^";'],
            ['\\%', 'return "%";'],
            ['\\(', 'return "(";'],
            ['\\)', 'return ")";'],
            ['\\,', 'return ",";'],
            ['==', 'return "==";'],
            ['\\!=', 'return "!=";'],
            ['\\~=', 'return "~=";'],
            ['>=', 'return ">=";'],
            ['<=', 'return "<=";'],
            ['<', 'return "<";'],
            ['>', 'return ">";'],
            ['\\?', 'return "?";'],
            ['\\:', 'return ":";'],
            ['and[^\\w]', 'return "and";'],
            ['or[^\\w]' , 'return "or";'],
            ['not[^\\w]', 'return "not";'],
            ['in[^\\w]', 'return "in";'],
            ['of[^\\w]', 'return "of";'],

            ['\\s+',  ''], // skip whitespace
            ['[0-9]+(?:\\.[0-9]+)?\\b', 'return "NUMBER";'], // 212.321

            ['([a-zA-Z_$][\\w$]*(\\[(([0-9]+)|([\'"`][\\w$]+[\'"`]))\\])*)(\\.[\\w$]+(\\[(([0-9]+)|([\'"`][\\w$]+[\'"`]))\\])*)*',
                `yytext = JSON.stringify(yytext);
                return "SYMBOL";`
            ], // some.Symbol22

            [`'(?:\\\\'|\\\\\\\\|[^'\\\\])*'`,
                `yytext = yy.buildString("'", yytext);
                return "SYMBOL";`
            ], // 'any \'escaped\' symbol'

            [`"(?:\\\\"|\\\\\\\\|[^"\\\\])*"`,
                `yytext = yy.buildString('"', yytext);
                return "STRING";`
            ], // "any \"escaped\" string"

            // End
            ['$', 'return "EOF";'],
        ]
    },
    // Operator precedence - lowest precedence first.
    // See http://www.gnu.org/software/bison/manual/html_node/Precedence.html
    // for a good explanation of how it works in Bison (and hence, Jison).
    // Different languages have different rules, but this seems a good starting
    // point: http://en.wikipedia.org/wiki/Order_of_operations#Programming_languages
    operators: [
        ['left', '?', ':'],
        ['left', 'or'],
        ['left', 'and'],
        ['left', 'in'],
        ['left', '==', '!=', '~='],
        ['left', '<', '<=', '>', '>='],
        ['left', '+', '-'],
        ['left', '*', '/', '%'],
        ['left', '^'],
        ['left', 'not'],
        ['left', 'UMINUS'],
        ['left', 'of'],
    ],
    // Grammar
    bnf: {
        expressions: [ // Entry point
            ['e EOF', 'return $1;']
        ],
        e: [
            ['e + e'  , code([1, '+', 3])],
            ['e - e'  , code([1, '-', 3])],
            ['e * e'  , code([1, '*', 3])],
            ['e / e'  , code([1, '/', 3])],
            ['e % e'  , code([1, '%', 3])],
            ['e ^ e'  , code(['Math.pow(', 1, ',', 3, ')'])],
            ['- e'    , code(['-', 2]), {prec: 'UMINUS'}],
            ['e and e', code(['Number(', 1, '&&', 3, ')'])],
            ['e or e' , code(['Number(', 1, '||', 3, ')'])],
            ['not e'  , code(['Number(!', 2, ')'])],
            ['e == e' , code(['Number(', 1, '==', 3, ')'])],
            ['e != e' , code(['Number(', 1, '!=', 3, ')'])],
            ['e ~= e' , code(['Number(RegExp(', 3, ').test(', 1, '))'])],
            ['e < e'  , code(['Number(', 1, '<' , 3, ')'])],
            ['e <= e' , code(['Number(', 1, '<=', 3, ')'])],
            ['e > e'  , code(['Number(', 1, '> ', 3, ')'])],
            ['e >= e' , code(['Number(', 1, '>=', 3, ')'])],
            ['e ? e : e', code([1, '?', 3, ':', 5])],
            ['( e )'  , code([2])],
            ['( array , e )', code(['[', 2, ',', 4, ']'])],
            ['NUMBER' , code([1])],
            ['STRING' , code([1])],
            ['SYMBOL' , code(['prop(', 1, ', data)'])],
            ['SYMBOL of e', code(['prop(', 1, ',', 3, ')'])],
            ['SYMBOL ( )', code(['(std.isfn(fns, ', 1, ') ? fns[', 1, ']() : std.unknown(', 1, '))'])],
            ['SYMBOL ( argsList )', code(['(std.isfn(fns, ', 1, ') ? fns[', 1, '](', 3, ') : std.unknown(', 1, '))'])],
            ['e in e', code(['std.isSubset(', 1, ', ', 3, ')'])],
            ['e not in e', code(['+!std.isSubset(', 1, ', ', 4, ')'])],
        ],
        argsList: [
            ['e', code([1], true)],
            ['argsList , e', code([1, ',', 3], true)],
        ],
        inSet: [
            ['e', code(['o ==', 1], true)],
            ['inSet , e', code([1, '|| o ==', 3], true)],
        ],
        array: [
            ['e', code([1])],
            ['array , e', code([1, ',', 3], true)],
        ],
    }
};

exports.parser = new Jison.Parser(grammar);
