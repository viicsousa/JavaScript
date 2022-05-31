var input = require("fs").readFileSync("stdin", "utf8");

var [gasto, velocidade] = input.split("\n");

var litros = (gasto * velocidade)/12;

console.log(litros.toFixed(3))