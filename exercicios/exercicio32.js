const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(12, 13);

let matrizResultante = [];

for (let i = 0; i < matriz.length; i++) {
    let maiorNumeroDaLinha = Math.abs(matriz[i][0]);
    for (let j = 0; j < matriz[i].length; j++) {
        if (Math.abs(matriz[i][j]) > maiorNumeroDaLinha) {
            maiorNumeroDaLinha = Math.abs(matriz[i][j]);
        }
    }
    let linhaResultante = matriz[i].map(num => num / maiorNumeroDaLinha);
    matrizResultante.push(linhaResultante);
}

console.log('Matriz:', matriz);
console.log('Matriz resultante:', matrizResultante);