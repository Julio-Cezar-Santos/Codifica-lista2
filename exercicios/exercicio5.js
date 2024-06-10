const prompt = require('prompt-sync')();

console.log(`
    1 - pedra
    2 - papel
    3 - tesoura`);
let escolhaJogador = parseInt(prompt('Escolha uma opção: '));

let escolhaComputador = Math.floor(Math.random() * 3) + 1;
console.log(`Computador escolheu ${escolhaComputador}`);
const mensagens = {
    1: {
        vence: 'pedra quebra tesoura',
        perde: 'papel embrulha pedra'
    },
    2: {
        vence: 'papel embrulha pedra',
        perde: 'tesoura corta papel'
    },
    3: {
        vence: 'tesoura corta papel',
        perde: 'pedra quebra tesoura'
    }
};

if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
    console.log('Opção inválida');
} else {
    if (escolhaJogador === escolhaComputador) {
        console.log('Empate');
    } else if ((escolhaJogador === 1 && escolhaComputador === 3) || 
               (escolhaJogador === 2 && escolhaComputador === 1) || 
               (escolhaJogador === 3 && escolhaComputador === 2)) {
        console.log(`
        Você venceu!
        ${mensagens[escolhaJogador].vence}`);
    } else {
        console.log(`
        Computador venceu!
        ${mensagens[escolhaJogador].perde}`);
    }
}