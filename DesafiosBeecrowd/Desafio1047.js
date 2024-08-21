var input = require("fs").readFileSync("stdin", "utf8");
var [Hi, Hf, Fi, Ff] = input.split(" ").map(item => parseInt(item));

Hf += Hi*60;
Ff += Fi*60;
let tempo = Ff-Hf;

if (tempo<=0){
    tempo = tempo+=24 * 60;
let h = tempo/60;
h =  parseInt(h)
let m = tempo%60;
    console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`)
}else{
    let h = tempo/60;
    h =  parseInt(h)
    let m = tempo%60;
    console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`)
}
