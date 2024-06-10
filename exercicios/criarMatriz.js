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

module.exports = criarMatriz;