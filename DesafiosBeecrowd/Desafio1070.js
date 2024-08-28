var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var cont = 0;
while (cont < 6) { //while  é uma estrutura de controle de fluxo que permite a repetição de um boloco de código enquanto uma condição específica for verdadeira;
    if (x % 2 == 1) {
        console.log(x);
        cont++;
    }
    x++;
}