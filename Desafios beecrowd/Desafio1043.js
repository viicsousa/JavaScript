var input = require("fs").readFileSync("stdin", "utf8");
let [a, b, c] = input.split(" ").map(item=>parseFloat(item))
if (a+b>c && a+c>b && b+c>a) {
    let perimetro = a + b + c;
    console.log("Perimetro = " + perimetro.toFixed(1))
}else {
    let area =((a+b)*c)/2;
    console.log("Area = " + area.toFixed(1));
}