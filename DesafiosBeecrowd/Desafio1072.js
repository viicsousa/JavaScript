var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n').map(item => parseInt(item));

var N = valores[0];
valores = valores.splice(1);
// Função principal para resolver o problema
function contarValoresDentroFora(N, valores) {
  let dentro = 0; // Contador para valores dentro do intervalo [10, 20]
  let fora = 0;   // Contador para valores fora do intervalo [10, 20]

  for (let i = 0; i < N; i++) {
      let X = valores[i];
      if (X >= 10 && X <= 20) {
          dentro++;
      } else {
          fora++;
      }
  }

  console.log(dentro + " in");
  console.log(fora + " out");
}

contarValoresDentroFora(N, valores);
