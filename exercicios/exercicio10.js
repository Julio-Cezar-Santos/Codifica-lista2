const prompt = require('prompt-sync')();

let numeros = [];
let continuar;

do {
    let mensagem = '\nDeseja continuar? \n1 - Sim\n2 - Não';
    let numero = Number(prompt('Digite um número: '));
    while (isNaN(numero)){
        console.log('Valor inválido, tente novamente');
        numero = Number(prompt('Digite um número: '));
    }

    numeros.push(numero);
    console.log(mensagem);
    continuar = Number(prompt());

    while (continuar !== 1 && continuar !== 2){ 
        console.log('Opcao invalida');
        console.log(mensagem);
        continuar = Number(prompt())
    }
} while(continuar !== 2);

let somatorio = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
let menorNumero = Math.min(...numeros);
let media = somatorio / numeros.length;
let totalPares = numeros.filter(numero => numero % 2 === 0).length;

console.log(`O somatório dos números é ${somatorio}`);
console.log(`O menor número é ${menorNumero}`);
console.log(`A média dos números é ${media}`);
console.log(`O total de números pares é ${totalPares}`);