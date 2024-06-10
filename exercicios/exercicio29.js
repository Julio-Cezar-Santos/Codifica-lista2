const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(5, 5);

let somaQuartaLinha = 0;
let somaSegundaColuna = 0;
let somaDiagonal = 0;
let somaTodosElementos = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (i === 3) {
            somaQuartaLinha += matriz[i][j];
        }
        if (j === 1) {
            somaSegundaColuna += matriz[i][j];
        }
        if (i === j) {
            somaDiagonal += matriz[i][j];
        }
        somaTodosElementos += matriz[i][j];
    }
}

console.log('Matriz:', matriz);
console.log('Soma dos elementos da quarta linha:', somaQuartaLinha);
console.log('Soma dos elementos da segunda coluna:', somaSegundaColuna);
console.log('Soma dos elementos da diagonal principal:', somaDiagonal);
console.log('Soma de todos os elementos:', somaTodosElementos);