var input = require("fs").readFileSync("stdin", "utf8");
var [A, B, C] = input.split(" ").map(item=>parseFloat(item));
var raiz = B * B - 4 * A * C;

 if ( A === 0 || raiz < 0 ) {
     console.log("Impossivel calcular");
 }else {
     var R1 = (- B + (Math.sqrt(raiz)))/ (2*A);
     var R2 = (- B - (Math.sqrt(raiz)))/ (2*A);
     console.log("R1 = " + R1.toFixed(5));
     console.log("R2 = " + R2.toFixed(5))
 }