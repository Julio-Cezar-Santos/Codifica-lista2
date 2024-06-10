const prompt = require('prompt-sync')();

const nomes = [];

function adicionarNomes(arrayNomes) {
    for (let i = 0; i < 7; i++) {
        let nome = prompt('Digite um nome: ');

        while (!nome) {
            console.log('Nome inválido, tente novamente');
            nome = prompt('Digite um nome: ');
        }

        arrayNomes.push(nome);
    }
}

adicionarNomes(nomes);

nomes.reverse().forEach(nome => console.log(nome));