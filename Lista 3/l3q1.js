//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

let vetor = [1,2,3,4,5,6,7,8,9,10]

var inicio = new Date();

for(let i=vetor.length-1; i>=0; i--)
    console.log(vetor[i])

console.log('tempo ' + (new Date() - inicio))

console.log(vetor.reverse())

console.log('tempo ' + (new Date() - inicio))

