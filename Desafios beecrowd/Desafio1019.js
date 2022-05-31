var input = require("fs").readFileSync("stdin","utf8");
var valorinteiro = parseInt(input);

var horas = parseInt(valorinteiro / 3600);
valorinteiro = valorinteiro % 3600;

var minutos = parseInt (valorinteiro / 60);
valorinteiro = valorinteiro % 60;

console.log(`${horas}:${minutos}:${valorinteiro}`);