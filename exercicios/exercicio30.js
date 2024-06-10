const criarMatriz = require('./criarMatriz');

const matriz = criarMatriz(5, 5);
let sl = [];
let sc = [];

for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    let somaColuna = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j];
        somaColuna += matriz[j][i];
    }
    sl.push(somaLinha);
    sc.push(somaColuna);
}

matriz.forEach(linha => {
    console.log(linha.join(' '));
});

console.log('Soma das linhas:', sl);
console.log('Soma das colunas:', sc);
