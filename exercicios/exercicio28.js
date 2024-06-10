const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(10, 10);

matriz.forEach(linha => {
    console.log(linha.join(' '));
});

let somaAcimaDiagonalPrincipal = 0;
let somaAbaixoDiagonalPrincipal = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i < j) {
            somaAcimaDiagonalPrincipal += matriz[i][j];
        } else if (i > j) {
            somaAbaixoDiagonalPrincipal += matriz[i][j];
        }
    }
}
console.log('Matriz:', matriz);
console.log('Soma acima da diagonal principal:', somaAcimaDiagonalPrincipal);
console.log('Soma abaixo da diagonal principal:', somaAbaixoDiagonalPrincipal);