var input = require ("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");
let [x, y] = lines.shift().split(" ").map(item=>parseInt(item));

while(true) {
if (x > y) {
    console.log ("Decrescente")
}else if (y > x) {
    console.log("Crescente");
}else {
    return;
}
[x, y] = lines.shift().split(" ").map(item=>parseInt(item));
}