var input = require("fs").readFileSync("stdin", "utf8");
var [v1, v2, v3] = input.split(" ").map(item => parseFloat(item));
let ordem = 
    [v1, v2, v3].sort(function(a, b){
        return b - a;
    }) 

    const A = ordem[0];
    const B = ordem[1];
    const C = ordem[2];

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO")
}else if(A * A === B * B + C * C) {
    console.log("TRIANGULO RETANGULO")
}else if(A * A > B * B + C * C) {
    console.log("TRIANGULO OBTUSANGULO")
}else if(A * A < B * B + C * C) {
    console.log("TRIANGULO ACUTANGULO")
}
if( A === B && B === C && A === C) {
    console.log ("TRIANGULO EQUILATERO")
}else if (A === B || B=== C || A ===C) {
    console.log("TRIANGULO ISOSCELES")
}
