var input = require("fs").readFileSync("stdin", "utf8");

var R = parseFloat (input);

var pi = 3.14159;

var volume = (4.0/3) * pi * Math.pow(R, 3);

console.log ("VOLUME = " + volume.toFixed(3));

