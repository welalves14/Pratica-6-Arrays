let positivos = function (value){
    return value >= 0;
};

arr = [2,-8,-13,-7,40, 60]

let arr2 = arr.filter(positivos);

console.log(arr2) // valores possitivos

let arr3 = arr2.reduce((a , v) => a + v, 0);

console.log(arr3)