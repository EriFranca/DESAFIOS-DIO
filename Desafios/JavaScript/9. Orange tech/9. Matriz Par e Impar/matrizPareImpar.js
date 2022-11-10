/*Desafio
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo: */
let arr = gets().split(''); 
let numerosPares = []; 
let numeroImpares = [];
let cnttPar = 0; cnttImpar = 0;

for(i=0; i < arr.length; i++){
  if(arr[i]%2 == 0) {
    numerosPares[cnttPar] = arr[i];
    cnttPar++;
  }else{
    numeroImpares[cnttImpar] = arr[i];
    cnttImpar++
  }
}
console.log(numerosPares.join(', ') +', ' +numeroImpares.join(', '));

/*código errado, mas que passa no console*/
let arr = gets().split('');
let newArr = [];
arr.forEach((item)=>item%2===0?newArr.unshift(item) : newArr.push(item));
print(newArr)