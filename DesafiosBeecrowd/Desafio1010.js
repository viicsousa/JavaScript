var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [line1, line2] = input.split('\n');
var [CodPecas, NumDePecas, ValorPeças] = input.split(" ");


var TotalPecas1 = line1(NumDePecas * ValorPeças);
var TotalPecas2 = line2(NumDePecas * ValorPeças);
console.log(NumDePecas);

