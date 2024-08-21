var input = require("fs").readFileSync("stdin", "utf8");

var [quilomentos, gasolina] = input.split("\n");

var consumo = quilomentos/ gasolina;

console.log(consumo.toFixed(3) + (" km/l"))