num = 6;
let arr = new Array(num); //criando um array vazio de 5 posições
let i = 1;

//preencher o array
for( i = 1; i<= num; i++){
        arr[i] = i;
}
arr.shift(); //remover o primeiro elemento que é zero, pois sempre a multiplicação vai da zero com ele.

let arr2 = arr.reduce((acc, v) => acc * v, 1);
console.log(arr2);