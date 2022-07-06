var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let number = parseInt(lines.shift());
let [a, b] = lines.shift().trim().split(" ");
let i = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

while (i<number) {
    if(b =="C") {
        coelhos += parseInt(a)
    }else if (b == "R") {
        ratos += parseInt(a)
    }else if (b == "S") {
        sapos += parseInt(a)
    }
    i++;
    [a, b] = lines.shift().trim().split(" ");
}
let total = sapos + coelhos + ratos;
console.log(`Total: ${total} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${((coelhos / total) * 100).toFixed(2)} %\nPercentual de ratos: ${((ratos / total) * 100).toFixed(2)} %\nPercentual de sapos: ${((sapos / total) * 100).toFixed(2)} %`)