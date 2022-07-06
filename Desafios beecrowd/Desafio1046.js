var input = require("fs").readFileSync("stdin", "utf8");
var [inicio, fim] = input.split(" ").map(item => parseInt(item));

tempo = fim - inicio;
if (tempo<=0){
    tempo+=24;
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}else{
    console.log(`O JOGO DUROU ${tempo} HORA(S)`)
}