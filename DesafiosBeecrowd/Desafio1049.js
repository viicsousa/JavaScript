
var input = require("fs").readFileSync("stdin", "utf8");
var lines= input.split("\n");

var A = lines.shift(); 
var B = lines.shift(); 
var C = lines.shift(); 


if (A[0] === "v"){ 
    if (B[0] === "a")
    { if (C[0] === "c"){ 
        console.log ("aguia"); 
} else if(C[0] === "o"){
    console.log ("pomba"); } 
} else if (B[0] === "m"){ 
    if (C[0] === "o"){ 
        console.log ("homem"); 
    } else if (C[0] === "h")
    { console.log ("vaca"); 
} } } else if (A[0] === "i"){ 
    if(B[0] === "i"){ 
        if(C[2] === "m"){ 
            console.log ("pulga"); 
        } else if (C[2] === "r"){ 
            console.log ("lagarta"); 
        } } else if (B[0] === "a"){ 
            if(C[0] === "h"){
                console.log ("sanguessuga"); 
                } else if (C[0] === "o"){
                    console.log ("minhoca"); } } }

