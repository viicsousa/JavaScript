var input = require("fs").readFileSync("stdin", "utf8");
var salario = parseFloat(input);
if (salario<=400){
    let percentual = 15;
    let reajuste = salario*0.15;
    let salarionovo = reajuste + salario;
    console.log("Novo salario: " + salarionovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log(`Em percentual: ${percentual} %`)
}else if (salario > 400 && salario <=800){
    let percentual = 12;
    let reajuste = salario*0.12;
    let salarionovo = reajuste + salario;
    console.log("Novo salario: " + salarionovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log(`Em percentual: ${percentual} %`)
}else if(salario > 800 && salario <= 1200){
    let percentual = 10;
    let reajuste = salario*0.10;
    let salarionovo = reajuste + salario;
    console.log("Novo salario: " + salarionovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log(`Em percentual: ${percentual} %`)
}else if (salario > 1200 && salario <= 2000){
    let percentual = 7;
    let reajuste = salario*0.07;
    let salarionovo = reajuste + salario;
    console.log("Novo salario: " + salarionovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log(`Em percentual: ${percentual} %`)
}else if (salario > 2000){
    let percentual = 4;
    let reajuste = salario*0.04;
    let salarionovo = reajuste + salario;
    console.log("Novo salario: " + salarionovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log(`Em percentual: ${percentual} %`)
}