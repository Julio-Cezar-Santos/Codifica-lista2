const prompt = require('prompt-sync')();

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 9 + 1)
}

function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = gerarNumeroAleatorio();
        }
    }
    return matriz;
}

let matriz = criarMatriz(6, 6);

let valor = Number(prompt('Digite um valor: '));
let vetorProduto = [];

if (isNaN(valor) || !valor) {
    console.log('Valor inválido.');
} else {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetorProduto.push(matriz[i][j] * valor)
        }
    }
    console.log('Matriz:', matriz);
    console.log('Vetor Produto:', vetorProduto);
}
