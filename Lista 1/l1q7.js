//Escreva um programa JavaScript para rodar fora do Browser, que calcula e escreve a área e o perímetro de um quadrado.

const lerDados = require('prompt-sync')();
let lado = parseInt(lerDados('Digite o lado do quadrado '));
console.log('A área é ' + lado*lado);
console.log('O perímetro do quadrado é ' + lado*4);

  