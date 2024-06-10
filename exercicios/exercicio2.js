const prompt = require('prompt-sync')();

function obterVelocidade() {
    let velocidade = Number(prompt('Qual a velocidade do carro? '));
    if (isNaN(velocidade) || velocidade < 0) {
        return console.log('Por favor, digite um número válido.');
    }
    return velocidade;
}

function calcularMulta(velocidade) {
    return (velocidade - 80) * 5;
}

function verificarVelocidade(velocidade) {
    if (velocidade > 80) {
        console.log('Calma ai Relampago Marquinhos. Você foi multado por excesso de velocidade.');
        let multa = calcularMulta(velocidade);
        console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
    } else {
        console.log('Você está dentro do limite de velocidade.');
    }
}


let velocidade = obterVelocidade();
if (velocidade) {
    verificarVelocidade(velocidade);
}