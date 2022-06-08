var input = require("fs").readFileSync("stdin", "utf8");
var valor = parseFloat(input);

console.log("NOTAS:");

var notas = parseInt(valor/100);
console.log(`${notas} nota(s) de R$ ${100}.00`);
valor = valor % 100;

var notas = parseInt(valor/50);
console.log(`${notas} nota(s) de R$ ${50}.00`);
valor = valor % 50;

var notas = parseInt(valor/20);
console.log(`${notas} nota(s) de R$ ${20}.00`);
valor = valor % 20;

var notas = parseInt(valor/10);
console.log(`${notas} nota(s) de R$ ${10}.00`);
valor = valor % 10;

var notas = parseInt(valor/5);
console.log(`${notas} nota(s) de R$ ${5}.00`);
valor = valor % 5;

var notas = parseInt(valor/2);
console.log(`${notas} nota(s) de R$ ${2}.00`);
valor = valor % 2;
valor = valor * 100;

console.log("MOEDAS:");

var moedas = parseInt(valor/100);
console.log(`${moedas} moeda(s) de R$ ${1}.00`);
valor = valor % 100.0;

var moedas = parseInt(valor/50);
console.log(`${moedas} moeda(s) de R$ 0.${50}`);
valor = valor % 50.0;

var moedas = parseInt(valor/25);
console.log(`${moedas} moeda(s) de R$ 0.${25}`);
valor = valor % 25.0;

var moedas = parseInt(valor/10);
console.log(`${moedas} moeda(s) de R$ 0.${10}`);
valor = valor % 10.0;

var moedas = parseInt(valor/5);
console.log(`${moedas} moeda(s) de R$ 0.0${5}`);
valor = valor % 5.0;
console.log(`${valor.toFixed(0)} moeda(s) de R$ 0.0${1}`);



