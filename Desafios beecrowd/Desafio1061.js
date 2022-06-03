var input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n").map(item=>parseInt(item));

let numeros = valores.filter(function(valores) {
    return valores % 2 === 0
});

console.log(numeros.length + (" valores pares"));