const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(3, 3);

console.log('Matriz original:');
matriz.forEach(linha => {
    console.log(linha.join(' '));
});


let somaDiagonalSecundaria = 0;
for (let i = 0, j = matriz.length - 1; i < matriz.length; i++, j--) {
    somaDiagonalSecundaria += matriz[i][j];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length;

for (let i = 0; i < matriz.length; i++) {
    matriz[i][i] *= mediaDiagonalSecundaria;
}

console.log('Matriz resultante:');
matriz.forEach(linha => {
    console.log(linha.join(' '));
});