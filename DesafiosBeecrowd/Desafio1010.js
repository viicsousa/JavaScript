var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [CodPecas1, NumDePecas1, ValorPecas1] = lines[0].split(" ").map(item => parseFloat(item));
var [CodPecas2, NumDePecas2, ValorPecas2] = lines[1].split(" ").map(item => parseFloat(item));

var TotalPecas1 = NumDePecas1 * ValorPecas1;
var TotalPecas2 = NumDePecas2 * ValorPecas2;

var total = TotalPecas1 + TotalPecas2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);