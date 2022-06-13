var input = require("fs").readFileSync("stdin", ("utf8"));
var linhas = input.split("\n");

const linha1 = linhas[0].split(" ");
const N1 = parseFloat(linha1[0]);
const N2 = parseFloat(linha1[1]);
const N3 = parseFloat(linha1[2]);
const N4 = parseFloat(linha1[3]);
const N5 = parseFloat(linhas[1]);



let mediaponderada = ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4)/10;
let exame  = (N5 + mediaponderada) / 2;

if (mediaponderada >= 7) {
    console.log ("Media: " + mediaponderada.toFixed(1))
    console.log("Aluno aprovado.");
}else if (mediaponderada < 5.0){
    console.log ("Media: " + mediaponderada.toFixed(1))
    console.log("Aluno reprovado.");
}else if (mediaponderada >= 5.0 && mediaponderada < 6.9) {
    console.log ("Media: " + mediaponderada.toFixed(1))
    console.log("Aluno em exame.");
    console.log("Nota do exame: "+ N5.toFixed(1));
    if (exame >= 5.0) {
        console.log("Aluno aprovado.");
    }else if ( exame < 5.0){
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + exame.toFixed(1))
}