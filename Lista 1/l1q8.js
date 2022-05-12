//Escreva um programa JavaScript para rodar fora do Browser, que solicite ao usuário dois números inteiros diferentes de zero. Com esses números imprima na tela: a soma, a subtração, o produto, a divisão e a média.

const lerDados = require('prompt-sync')();
let n1 = parseInt(lerDados('Digite o primeiro número '));
let n2 = parseInt(lerDados('Digite o segundo número '));
console.log('A soma é ' + (n1+n2));
console.log('A subtração é ' + (n1-n2));
console.log('A multiplicação é ' + (n1*n2));
if(n2!=0)
    console.log('A divisão é ' + (n1/n2));
else
    console.log('O denominador tem que ser diferente de zero');

  