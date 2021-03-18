/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"%":10,"^":11,"and":12,"or":13,"not":14,"==":15,"!=":16,"~=":17,"<":18,"<=":19,">":20,">=":21,"?":22,":":23,"(":24,")":25,"array":26,",":27,"NUMBER":28,"STRING":29,"SYMBOL":30,"of":31,"argsList":32,"in":33,"inSet":34,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"%",11:"^",12:"and",13:"or",14:"not",15:"==",16:"!=",17:"~=",18:"<",19:"<=",20:">",21:">=",22:"?",23:":",24:"(",25:")",27:",",28:"NUMBER",29:"STRING",30:"SYMBOL",31:"of",33:"in"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,3],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,5],[4,3],[4,5],[4,1],[4,1],[4,1],[4,3],[4,3],[4,4],[4,3],[4,4],[32,1],[32,3],[34,1],[34,3],[26,1],[26,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$
) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 2:this.$ = ["(", $$[$0-2],"+",$$[$0], ")"];
break;
case 3:this.$ = ["(", $$[$0-2],"-",$$[$0], ")"];
break;
case 4:this.$ = ["(", $$[$0-2],"*",$$[$0], ")"];
break;
case 5:this.$ = ["(", $$[$0-2],"/",$$[$0], ")"];
break;
case 6:this.$ = ["(", $$[$0-2],"%",$$[$0], ")"];
break;
case 7:this.$ = ["(", "Math.pow(",$$[$0-2],",",$$[$0],")", ")"];
break;
case 8:this.$ = ["(", "-",$$[$0], ")"];
break;
case 9:this.$ = ["(", "Number(",$$[$0-2],"&&",$$[$0],")", ")"];
break;
case 10:this.$ = ["(", "Number(",$$[$0-2],"||",$$[$0],")", ")"];
break;
case 11:this.$ = ["(", "Number(!",$$[$0],")", ")"];
break;
case 12:this.$ = ["(", "Number(",$$[$0-2],"==",$$[$0],")", ")"];
break;
case 13:this.$ = ["(", "Number(",$$[$0-2],"!=",$$[$0],")", ")"];
break;
case 14:this.$ = ["(", "Number(RegExp(",$$[$0],").test(",$$[$0-2],"))", ")"];
break;
case 15:this.$ = ["(", "Number(",$$[$0-2],"<",$$[$0],")", ")"];
break;
case 16:this.$ = ["(", "Number(",$$[$0-2],"<=",$$[$0],")", ")"];
break;
case 17:this.$ = ["(", "Number(",$$[$0-2],"> ",$$[$0],")", ")"];
break;
case 18:this.$ = ["(", "Number(",$$[$0-2],">=",$$[$0],")", ")"];
break;
case 19:this.$ = ["(", $$[$0-4],"?",$$[$0-2],":",$$[$0], ")"];
break;
case 20:this.$ = ["(", $$[$0-1], ")"];
break;
case 21:this.$ = ["(", "[",$$[$0-3],",",$$[$0-1],"]", ")"];
break;
case 22:this.$ = ["(", $$[$0], ")"];
break;
case 23:this.$ = ["(", $$[$0], ")"];
break;
case 24:this.$ = ["(", "prop(",$$[$0],", data)", ")"];
break;
case 25:this.$ = ["(", "prop(",$$[$0-2],",",$$[$0],")", ")"];
break;
case 26:this.$ = ["(", "(std.isfn(fns, ",$$[$0-2],") ? fns[",$$[$0-2],"]() : std.unknown(",$$[$0-2],"))", ")"];
break;
case 27:this.$ = ["(", "(std.isfn(fns, ",$$[$0-3],") ? fns[",$$[$0-3],"](",$$[$0-1],") : std.unknown(",$$[$0-3],"))", ")"];
break;
case 28:this.$ = ["(", "std.isSubset(",$$[$0-2],", ",$$[$0],")", ")"];
break;
case 29:this.$ = ["(", "+!std.isSubset(",$$[$0-3],", ",$$[$0],")", ")"];
break;
case 30:this.$ = [$$[$0]];
break;
case 31:this.$ = [$$[$0-2],",",$$[$0]];
break;
case 32:this.$ = ["o ==",$$[$0]];
break;
case 33:this.$ = [$$[$0-2],"|| o ==",$$[$0]];
break;
case 34:this.$ = ["(", $$[$0], ")"];
break;
case 35:this.$ = [$$[$0-2],",",$$[$0]];
break;
}
},
table: [{3:1,4:2,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{1:[3]},{5:[1,9],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],33:[1,26]},{4:28,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:29,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:30,7:[1,3],14:[1,4],24:[1,5],26:31,28:[1,6],29:[1,7],30:[1,8]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],25:[2,22],27:[2,22],33:[2,22]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],10:[2,23],11:[2,23],12:[2,23],13:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],21:[2,23],22:[2,23],23:[2,23],25:[2,23],27:[2,23],33:[2,23]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],21:[2,24],22:[2,24],23:[2,24],24:[1,33],25:[2,24],27:[2,24],31:[1,32],33:[2,24]},{1:[2,1]},{4:34,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:35,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:36,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:37,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:38,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:39,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:40,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:41,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:42,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:43,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:44,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:45,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:46,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:47,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:48,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:49,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:50,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{33:[1,51]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],25:[2,8],27:[2,8],33:[2,8]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],25:[2,11],27:[2,11],33:[2,11]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],25:[1,52],27:[2,34],33:[1,26]},{27:[1,53]},{4:54,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{4:57,7:[1,3],14:[1,4],24:[1,5],25:[1,55],28:[1,6],29:[1,7],30:[1,8],32:56},{5:[2,2],6:[2,2],7:[2,2],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,2],13:[2,2],14:[1,27],15:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],20:[2,2],21:[2,2],22:[2,2],23:[2,2],25:[2,2],27:[2,2],33:[2,2]},{5:[2,3],6:[2,3],7:[2,3],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,3],13:[2,3],14:[1,27],15:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],20:[2,3],21:[2,3],22:[2,3],23:[2,3],25:[2,3],27:[2,3],33:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[2,4],11:[1,15],12:[2,4],13:[2,4],14:[1,27],15:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],20:[2,4],21:[2,4],22:[2,4],23:[2,4],25:[2,4],27:[2,4],33:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[1,15],12:[2,5],13:[2,5],14:[1,27],15:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],20:[2,5],21:[2,5],22:[2,5],23:[2,5],25:[2,5],27:[2,5],33:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[1,15],12:[2,6],13:[2,6],14:[1,27],15:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6],22:[2,6],23:[2,6],25:[2,6],27:[2,6],33:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[1,27],15:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],25:[2,7],27:[2,7],33:[2,7]},{5:[2,9],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,9],13:[2,9],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,9],23:[2,9],25:[2,9],27:[2,9],33:[1,26]},{5:[2,10],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[2,10],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,10],23:[2,10],25:[2,10],27:[2,10],33:[1,26]},{5:[2,12],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,12],13:[2,12],14:[1,27],15:[2,12],16:[2,12],17:[2,12],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,12],23:[2,12],25:[2,12],27:[2,12],33:[2,12]},{5:[2,13],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,13],13:[2,13],14:[1,27],15:[2,13],16:[2,13],17:[2,13],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,13],23:[2,13],25:[2,13],27:[2,13],33:[2,13]},{5:[2,14],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,14],13:[2,14],14:[1,27],15:[2,14],16:[2,14],17:[2,14],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,14],23:[2,14],25:[2,14],27:[2,14],33:[2,14]},{5:[2,15],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,15],13:[2,15],14:[1,27],15:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[2,15],25:[2,15],27:[2,15],33:[2,15]},{5:[2,16],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,16],13:[2,16],14:[1,27],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[2,16],25:[2,16],27:[2,16],33:[2,16]},{5:[2,17],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,17],13:[2,17],14:[1,27],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],25:[2,17],27:[2,17],33:[2,17]},{5:[2,18],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,18],13:[2,18],14:[1,27],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],25:[2,18],27:[2,18],33:[2,18]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],23:[1,58],33:[1,26]},{5:[2,28],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[2,28],13:[2,28],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,28],23:[2,28],25:[2,28],27:[2,28],33:[2,28]},{4:59,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],25:[2,20],27:[2,20],33:[2,20]},{4:60,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],14:[2,25],15:[2,25],16:[2,25],17:[2,25],18:[2,25],19:[2,25],20:[2,25],21:[2,25],22:[2,25],23:[2,25],25:[2,25],27:[2,25],33:[2,25]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],14:[2,26],15:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],25:[2,26],27:[2,26],33:[2,26]},{25:[1,61],27:[1,62]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],25:[2,30],27:[2,30],33:[1,26]},{4:63,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{5:[2,29],6:[2,29],7:[2,29],8:[2,29],9:[2,29],10:[2,29],11:[2,29],12:[2,29],13:[2,29],14:[2,29],15:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],20:[2,29],21:[2,29],22:[2,29],23:[2,29],25:[2,29],27:[2,29],33:[2,29]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],25:[1,64],27:[2,35],33:[1,26]},{5:[2,27],6:[2,27],7:[2,27],8:[2,27],9:[2,27],10:[2,27],11:[2,27],12:[2,27],13:[2,27],14:[2,27],15:[2,27],16:[2,27],17:[2,27],18:[2,27],19:[2,27],20:[2,27],21:[2,27],22:[2,27],23:[2,27],25:[2,27],27:[2,27],33:[2,27]},{4:65,7:[1,3],14:[1,4],24:[1,5],28:[1,6],29:[1,7],30:[1,8]},{5:[2,19],6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[2,19],23:[2,19],25:[2,19],27:[2,19],33:[1,26]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],22:[2,21],23:[2,21],25:[2,21],27:[2,21],33:[2,21]},{6:[1,10],7:[1,11],8:[1,12],9:[1,13],10:[1,14],11:[1,15],12:[1,16],13:[1,17],14:[1,27],15:[1,18],16:[1,19],17:[1,20],18:[1,21],19:[1,22],20:[1,23],21:[1,24],22:[1,25],25:[2,31],27:[2,31],33:[1,26]}],
defaultActions: {9:[2,1]},
parseError: function parseError (str, hash) {
    throw new Error(str);
},
parse: function parse (input) {
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

    function popStack (n) {
        stack.length = stack.length - 2*n;
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

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

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
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
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
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
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
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
undefined/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
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
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
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
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
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
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex () {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },
popState:function popState () {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules () {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin (condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return "*";
break;
case 1:return "/";
break;
case 2:return "-";
break;
case 3:return "+";
break;
case 4:return "^";
break;
case 5:return "%";
break;
case 6:return "(";
break;
case 7:return ")";
break;
case 8:return ",";
break;
case 9:return "==";
break;
case 10:return "!=";
break;
case 11:return "~=";
break;
case 12:return ">=";
break;
case 13:return "<=";
break;
case 14:return "<";
break;
case 15:return ">";
break;
case 16:return "?";
break;
case 17:return ":";
break;
case 18:return "and";
break;
case 19:return "or";
break;
case 20:return "not";
break;
case 21:return "in";
break;
case 22:return "of";
break;
case 23:
break;
case 24:return "NUMBER";
break;
case 25:yy_.yytext = JSON.stringify(yy_.yytext);
                return "SYMBOL";
break;
case 26:yy_.yytext = yy.buildString("'", yy_.yytext);
                return "SYMBOL";
break;
case 27:yy_.yytext = yy.buildString('"', yy_.yytext);
                return "STRING";
break;
case 28:return "EOF";
break;
}
};
lexer.rules = [/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\%)/,/^(?:\()/,/^(?:\))/,/^(?:\,)/,/^(?:==)/,/^(?:\!=)/,/^(?:\~=)/,/^(?:>=)/,/^(?:<=)/,/^(?:<)/,/^(?:>)/,/^(?:\?)/,/^(?:\:)/,/^(?:and[^\w])/,/^(?:or[^\w])/,/^(?:not[^\w])/,/^(?:in[^\w])/,/^(?:of[^\w])/,/^(?:\s+)/,/^(?:[0-9]+(?:\.[0-9]+)?\b)/,/^(?:([a-zA-Z_$][\w$]*(\[(([0-9]+)|(['"`][\w$]+['"`]))\])*)(\.[\w$]+(\[(([0-9]+)|(['"`][\w$]+['"`]))\])*)*)/,/^(?:'(?:\\'|\\\\|[^'\\])*')/,/^(?:"(?:\\"|\\\\|[^"\\])*")/,/^(?:$)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
}