var input = require ("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let senha =lines.shift()
let SENHA = parseInt(senha)
 while (true) {
    if (SENHA == 2002){
        console.log("Acesso Permitido")
        return;
    }
        console.log("Senha Invalida");
        senha =lines.shift()
        SENHA = parseInt(senha)
    }
    
 