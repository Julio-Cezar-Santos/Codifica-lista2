const prompt = require('prompt-sync')();

function promptValidado(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor)) {
        console.log('Valor inválido, tente novamente');
        valor = Number(prompt(mensagem));
    }
    return valor;
}

let razaoPa = promptValidado('Digite a razão da PA: ');
let primeiroTermo = promptValidado('Digite o primeiro termo da PA: ');

let soma = 0;
for (let i = 0; i < 10; i++) {
    console.log(primeiroTermo + (i * razaoPa));
    soma += primeiroTermo + i * razaoPa;
}

console.log(`Soma dos 10 primeiros termos da PA: ${soma}`);

