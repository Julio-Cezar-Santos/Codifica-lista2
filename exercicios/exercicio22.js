const prompt = require('prompt-sync')();
const validarPrompt = require('./validarPrompt');

let somaSalario = 0;
let somaFilhos = 0;
let maiorSalario = 0;
let salarioAte350 = 0;
let continuar = true;
let contador = 0;

while (continuar) {
    let salario = validarPrompt('Digite o salário: ');
    let filhos = validarPrompt('Digite o número de filhos: ');


    somaSalario += salario;
    somaFilhos += filhos;

    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    if (salario <= 350) {
        salarioAte350++;
    }

    contador++;

    let resposta = prompt('Deseja continuar? (S/N) ').toLocaleUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }

}

let mediaSalario = somaSalario / contador;
let mediaFilhos = somaFilhos / contador;
let percentualSalarioAte350 = (salarioAte350 / contador) * 100;

console.log("\n*************** RESULTADO ***************\n");
console.log(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioAte350.toFixed(2)}%\n`);



