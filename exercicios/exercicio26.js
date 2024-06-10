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

let matrizA = criarMatriz(3, 5);
let matrizB = criarMatriz(3, 5);

let matrizProduto = [];
for (let i = 0; i < matrizA.length; i++) {
    matrizProduto[i] = [];
    for (let j = 0; j < matrizA[i].length; j++) {
        matrizProduto[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}

console.log('Matriz A:', matrizA);
console.log('Matriz B:', matrizB);
console.log('Matriz Produto:', matrizProduto);

