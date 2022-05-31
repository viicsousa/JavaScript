var input = require("fs").readFileSync("stdin", "utf8");

var [A, B, C] = input.split(" ").map(item=>parseInt(item));

var MaiorAB = (A + B + Math.abs(A - B))/2;
var MaiorXC = (C + MaiorAB + Math.abs(C - MaiorAB))/2;

console.log(MaiorXC + ( " eh o maior"))