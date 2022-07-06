var input = require("fs").readFileSync("stdin", "utf8");
const valores = input.split("\n");
const linha1 = parseInt(valores[0].split(" ")[1]);
const [h1, m1, s1] = valores[1].split(":").map(item=>parseInt(item));
const linha2 = parseInt(valores[2].split(" ")[1]);
const [h2, m2, s2] = valores[3].split(":").map(item=>parseInt(item));

let t1 = s1 + m1*60 + h1*60*60 + linha1*24*60*60;
let t2 = s2 + m2*60 + h2*60*60 + linha2*24*60*60;
let dif = t2-t1;
let dia = dif/(24*60*60);
dif = dif%(24*60*60);
let horas = dif/(60*60);
dif = dif%(60*60);
let minutos = dif/60;
dif = dif% 60;
let segundos = dif
console.log(parseInt(dia) + " dia(s)");
console.log(parseInt(horas) + " hora(s)")
console.log(parseInt(minutos) + " minuto(s)")
console.log(parseInt(segundos) + " segundo(s)")

