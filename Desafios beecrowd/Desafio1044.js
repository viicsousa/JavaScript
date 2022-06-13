var input = require("fs").readFileSync("stdin", "utf8");
let [A, B] = input.split(" ").map(item=>parseInt(item));
if ( A % B === 0 || B % A ===0){
    console.log("Sao Multiplos");
}else {
    console.log("Nao sao Multiplos");
}