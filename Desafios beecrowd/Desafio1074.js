var input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n");
let N = parseInt(valores.shift());

for (i = 0; i < N; i++) {
    let n = parseFloat(valores[i]);

    if (n % 2 !== 0 && n > 0) {
        console.log("ODD POSITIVE");
    }else if(n===0) {
        console.log("NULL");
    }else if (n % 2 !== 0 && n < 0) {
        console.log("ODD NEGATIVE");
    }else if (n % 2 === 0 && n > 0) {
        console.log("EVEN POSITIVE");
    }else if (n % 2 === 0 && n < 0) {
        console.log("EVEN NEGATIVE");
    }
}


