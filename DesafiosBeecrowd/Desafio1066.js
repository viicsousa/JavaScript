var input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n").map(item=>parseInt(item));

let pares = valores.filter(function(valores) {
    return valores % 2 === 0
});

console.log(pares.length + (" valor(es) par(es)"));

let impar = valores.filter(function(valores) {
    return valores % 2 === 1 || valores % 2 === -1
});

console.log(impar.length + (" valor(es) impar(es)")); 
let positivos = valores.filter(function(valores) {
    return valores > 0
});

console.log(positivos.length + (" valor(es) positivo(s)"));

let negativos = valores.filter(function(valores) {
    return valores < 0
});

console.log(negativos.length + (" valor(es) negativo(s)"));