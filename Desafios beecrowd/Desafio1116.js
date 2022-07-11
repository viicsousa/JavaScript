var lines = input.split('\n');

const number = lines.shift();
let [x, y] = lines.shift().split(" ");
let i = 0;

while(i < number){
  if(!Number.isFinite(x / y)) {
    console.log("divisao impossivel");
  }
  else{
    console.log((x/y).toFixed(1));
  }
  i++
  [x, y] = lines.shift().split(" ");
}