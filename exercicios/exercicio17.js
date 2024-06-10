const prompt = require('prompt-sync')();

const nomes = [];
const idades = [];

function adicionarPessoas(arrayNomes, arrayIdades) {
    for (let i = 0; i < 9; i++) {
        let nome = prompt('Digite um nome: ');
        let idade = Number(prompt('Digite a idade: '));

        while (!nome || !idade || !Number.isInteger(idade) || idade < 0) {
            console.log('Valor inválido, tente novamente');
            nome = prompt('Digite um nome: ');
            idade = Number(prompt('Digite a idade: '));
        }

        arrayNomes.push(nome);
        arrayIdades.push(idade);
    }
}

adicionarPessoas(nomes, idades);

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(nomes[i] + " tem " + idades[i] + " anos");
    }
}