const prompt = require('prompt-sync')();

function adicionarNumeros(arrayNumeros) {
    for (let i = 0; i < 10; i++) {
        let numero = Number(prompt('Digite um número inteiro: '));

        while (!numero || !Number.isInteger(numero)) {
            console.log('Valor inválido, tente novamente');
            nome = prompt('Digite um número inteiro: ');
        }

        arrayNumeros.push(numero);
    }
}

const arrayNumeros = [];

adicionarNumeros(arrayNumeros);

arrayNumeros.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(numero + " é par" + " e esta na posição " + arrayNumeros.indexOf(numero)); 
    }
});
