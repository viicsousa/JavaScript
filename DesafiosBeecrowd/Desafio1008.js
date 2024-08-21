var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var ndofuncionario = parseInt(valores.shift());
var hrtrabalhada = parseInt(valores.shift());
var valordahr = parseFloat(valores.shift());

var number = ndofuncionario;
var salario = hrtrabalhada * valordahr;

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salario.toFixed(2));

