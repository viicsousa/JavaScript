var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var x = parseInt(lines[0]);
var y = parseInt(lines[1]);

if (x > y) {
  var temp = x;
  x = y;
  y = temp;
}

var somaImpares = 0;
 for(var i = x + 1; i < y; i++){ // for é uma estrutura de loop e se você perder são três divisões o inicio, a condição e o incremento do loop
  if (i%2 !==0){
    somaImpares+=i;
  }
 }

console.log(somaImpares);