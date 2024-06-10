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

let matriz = criarMatriz(15, 20);

matriz.forEach(linha => {
    console.log(linha.join(' '));
});

function somarColunas(matriz) {
    for (let j = 0; j < matriz[0].length; j++) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            soma += matriz[i][j];
        }
        console.log(`Soma da coluna ${j + 1}: ${soma}`);
    }
}

somarColunas(matriz);

