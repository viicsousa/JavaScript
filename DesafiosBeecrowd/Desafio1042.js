var input = require("fs").readFileSync("stdin", "utf8");
var Valores = input.split(" ").map(item=>parseInt(item));
var v1 = Valores.shift();
var v2 = Valores.shift();
var v3 = Valores.shift();
let ordem =
[v1,v2,v3].sort(function(a, b) {
    return a - b
});


const o1 = ordem[0];
const o2 = ordem[1];
const o3 = ordem[2];

console.log(o1);
console.log(o2);
console.log(o3);
console.log("");
console.log(v1);
console.log(v2);
console.log(v3);

