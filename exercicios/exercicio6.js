const prompt = require('prompt-sync')();

const escolharComputador = Math.floor(Math.random() * 5) + 1;

console.log(`escolha um número de 1 a 5`);
let escolhaJogador = parseInt(prompt('Escolha uma opção: '));

while (escolhaJogador !== escolharComputador){
    console.log('Você errou, tente novamente');
    escolhaJogador = parseInt(prompt('Escolha uma opção: '));
}

console.log('Parabéns, você acertou!');