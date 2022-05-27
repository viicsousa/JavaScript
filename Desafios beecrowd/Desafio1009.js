var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");

var nome = linhas.shift();
var salariofx = parseFloat(linhas.shift());
var vendas =parseFloat(linhas.shift());

var salariototal = ( 15 * vendas/100) + salariofx;

console.log("TOTAL = R$ " + salariototal.toFixed(2));