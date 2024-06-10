const M =
    [
        [-2, 5, 0, 3, -1, 7, 4, -6],
        [1, 8, -4, 2, 6, -3, 9, -5],
        [-7, 2, 3, -9, 4, 0, 5, 1],
        [6, -1, 7, 4, -5, 2, 8, -3],
        [-4, 9, -2, 1, 3, -8, 6, 0],
        [0, 3, -5, 7, 2, -6, 1, 4]
    ];

M.forEach((linha, i) => {
    let contador = 0;
    linha.forEach((valor) => {
        if (valor < 0) {
            contador++;
        }
    });
    console.log(`Na linha ${i} temos ${contador} números negativos`);
});