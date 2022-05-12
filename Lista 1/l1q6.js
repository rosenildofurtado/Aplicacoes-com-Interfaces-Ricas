//Escreva um programa JavaScript para rodar fora do Browser, que receber o número de habitantes de uma cidade, o número de casos de infectados de COVID19 e o número de morte por COVID19. Imprima a média de casos e de mortes dessa cidade.

const lerDados = require('prompt-sync')();
var habitantes = parseInt(lerDados('Digite o número de habitantes da cidade '));
var infectados = parseInt(lerDados('Digite o número de infectados da cidade '));
var mortes = parseInt(lerDados('Digite o número de mortes da cidade '));

console.log('O percentual de casos é ' + (infectados/habitantes*100));
console.log('O percentual de mortes é ' + (mortes/habitantes*100));
  