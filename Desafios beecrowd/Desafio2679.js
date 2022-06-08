var input = require("fs").readFileSync("stdin", "utf8");
const X = parseInt(input)
if (X % 2 === 0) {
    console.log(X+2);
}else {
    console.log(X+1);
}