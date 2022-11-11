let nome = "Francisco Welenilson da Silva Alves";
let arr = nome.split(" ");
let abreviacao = arr.reduce((acc, v) => acc + v[0], "");
console.log(abreviacao);

