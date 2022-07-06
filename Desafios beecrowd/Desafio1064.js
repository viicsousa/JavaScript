const { Console } = require("console");
const { arrayBuffer } = require("stream/consumers");

var input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n").map(item=>parseFloat(item));

let numeros = valores.filter(function(valores) {
    return valores > 0
});



console.log(numeros.length + (" valores positivos"));
let soma = 0
for (let i = 0; i <numeros.length; i++){soma += numeros[i];}
let resultado = soma/numeros.length;
console.log(resultado.toFixed(1))