var input = require("fs").readFileSync("stdin", "utf8");
var [X, Y] = input.split(" ").map(item=>parseFloat(item));
if ( X === 0 && Y===0){
    console.log("Origem");
}else if(X===0 && Y != 0) {
    console.log("Eixo Y");
}else if(X !=0 && Y === 0) {
    console.log("Eixo X");
}else if(X > 0 && Y > 0) {
    console.log("Q1");
}else if(X < 0 && Y > 0) {
    console.log("Q2"); 
}else if(X < 0 && Y < 0) {
    console.log("Q3");
}else if(X > 0 && Y < 0) {
    console.log("Q4")
}