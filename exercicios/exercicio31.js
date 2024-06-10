const prompt = require('prompt-sync')();
const criarMatriz = require('./criarMatriz');

let A = parseInt(prompt('Digite o valor de A: '));

while (!Number.isInteger(A)) {
    console.log('Digite um valor válido');
    A = parseInt(prompt('Digite o valor de A: '));
}

let matrizV = criarMatriz(30, 30);
let matrizSemA = [];
let contadorA = 0;
for (let i = 0; i < matrizV.length; i++) {
    let linha = [];
    for (let j = 0; j < matrizV[i].length; j++) {
        if (matrizV[i][j] === A) {
            contadorA++;
        } else {
            linha.push(matrizV[i][j]);
        }
    }
    matrizSemA.push(linha);
}

console.log('Quantidade de vezes que A aparece:', contadorA);
console.log('Matriz sem A:', matrizSemA);
