const prompt = require('prompt-sync')();

function calcularDiasPerdidos(cigarrosPorDia, anosFumando) {
    let totalCigarros = cigarrosPorDia * (anosFumando * 365);
    return parseInt(totalCigarros / 144);
}

function main() {
    let cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
    let anosFumando = parseInt(prompt('Há quantos anos você fuma? '));

    if (isNaN(cigarrosPorDia) || isNaN(anosFumando)) {
        console.log('Por favor, digite um número válido.');
        return;
    }

    let diasPerdidos = calcularDiasPerdidos(cigarrosPorDia, anosFumando);
    console.log(`Você perdeu ${diasPerdidos} dias de vida por fumar.`);
}

main();