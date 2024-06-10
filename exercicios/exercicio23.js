let MI = [];

for (let i = 0; i < 7; i++) {
    let linha = [];
    for (let j = 0; j < 7; j++) {
        if (i === j) {
            linha.push(1);
        } else {
            linha.push(0);
        }
    }
    MI.push(linha);
}

MI.forEach(linha => {
    console.log(linha.join(' '));
});