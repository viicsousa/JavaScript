let input = require("fs").readFileSync("stdin", "utf8");
let valores = input.split("\n").map(item=>Number(item)); 
const numeros = valores.filter(function(valores) {
    return valores > 0;
});

console.log(numeros.length + " valores positivos")


