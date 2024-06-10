const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
    if (sexo === 'M') {
        return 72.7 * altura - 58;
    } else if (sexo === 'F') {
        return 62.1 * altura - 44.7;
    }
}


let altura = parseFloat(prompt('Digite a altura da pessoa: '));
let sexo = prompt('Digite o sexo da pessoa (M/F): ').toLocaleUpperCase();

if (isNaN(altura) || altura <= 0) {
    console.log('Altura inválida.');
} else {
    if (sexo !== 'M' && sexo !== 'F') {
        console.log('Sexo inválido.');
    } else {
        console.log(`Peso ideal: ${calcularPesoIdeal(altura, sexo).toFixed(2)} kg`);
    }
}
