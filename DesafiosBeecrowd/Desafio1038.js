var input = require ("fs").readFileSync("stdin", "utf8");
let valores = input.split(" ");
let lanche = parseFloat(valores.shift());
let quantidade = parseFloat(valores.shift());

if (lanche === 1) {
    lanche1 = 4.00 * quantidade;
    console.log("Total: R$ " + lanche1.toFixed(2));
}else if(lanche === 2) {
    lanche2 = 4.50 * quantidade;
    console.log("Total: R$ " + lanche2.toFixed(2));
}else if(lanche === 3) {
    lanche3 = 5.00 * quantidade
    console.log("Total: R$ " + lanche3.toFixed(2));
}else if(lanche ===4) {
    lanche4 = 2.00 * quantidade;
    console.log("Total: R$ " + lanche4.toFixed(2));
}else if (lanche === 5) {
    lanche5 = 1.50 * quantidade;
    console.log("Total: R$ " + lanche5.toFixed(2));
}