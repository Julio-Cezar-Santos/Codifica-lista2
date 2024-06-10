const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(50, 50);

console.log('Matriz original:');
console.log(matriz);

for (let i = 0; i < matriz.length; i++) {
    const elementoDiagonal = matriz[i][i];
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] *= elementoDiagonal
    }
}

console.log('Matriz resultante:');
console.log(matriz);

