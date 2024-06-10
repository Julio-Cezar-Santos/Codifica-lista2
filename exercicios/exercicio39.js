let vetor = [];

for (let i = 0; i < 100; i++) {
    vetor.push(Math.round((Math.random() * 2 - 1) * 20));
}

console.log('vetor original:', vetor);

let vetorCompactado = vetor = vetor.filter(valor => valor >= 1);

console.log('vetor compactado:', vetorCompactado);