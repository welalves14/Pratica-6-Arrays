let arr = [2, 3, 10]

let tam = arr.length;
let soma = arr.reduce((a , v) => a + v, 0);

let resultado = soma/tam;

console.log(resultado);
