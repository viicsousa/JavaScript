var input = require("fs").readFileSync("stdin", "utf8");
var dias = parseInt(input);

var anos = parseInt (dias/365);
dias  = dias % 365;

var meses = parseInt (dias/30);
dias = dias % 30;


console.log(anos + " ano (s)");
console.log(meses + " mes (es)");
console.log(dias + " dia (s)");