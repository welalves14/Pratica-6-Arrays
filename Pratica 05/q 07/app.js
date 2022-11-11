const input = [['a', 'b', 'c'],['c', 'd', 'f'],['d', 'f', 'g'],];
//============================   
let arr = input.flat(); // colocar tudo em uma dimenção
let tamOrinal = arr.length;
console.log('Array com duplicados: ',arr);
console.log('Tamanho original: ',tamOrinal);
//=============================
// remover duplicados
let removeDuplicados = arr.filter((este, i) => arr.indexOf(este) === i);
console.log('Array sem duplicados: ',novaArr);
//=============================
let contElementos = new Array(tamSemDuplivados);
contElementos.fill(null);
let tamSemDuplivados = removeDuplicados.length;
console.log('Tamanho sem duplicados: ',tamSemDuplivados);
//==========
console.log('Tamanho do array de contagem: ',contElementos.length);
//======
let cont = 1;
//função para contar elementos:
for(i = 0; i < tamSemDuplivados;i++){
       for(j = 0; j < tamOrinal;j++){
                if( novaArr[i] == arr[j]){
                        contElementos[i] = cont++;
                }
        }
}

// função para saida:


//====================
console.log("-----------");
console.log('quantidade de cada elemento: ',contElementos);
