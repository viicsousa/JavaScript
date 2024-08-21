var input = require ("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

x = lines.shift();

for (let i = 1; i <= x;  i = i +2) {
    console.log(i);
}