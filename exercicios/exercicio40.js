let resultado = [];

for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * 10) + 1;
    if (resultado.includes(numero)) {
        i--;
    } else {
        resultado.push(numero);
    }
}

let apostas = []

for (let i = 0; i < 50; i++) {
    let aposta = [];
    for (let j = 0; j < 5; j++) {
        let numero = Math.floor(Math.random() * 10) + 1;
        if (aposta.includes(numero)) {
            j--;
        } else {
            aposta.push(numero);
        }
    }
    apostas.push({ id: i, numeros: aposta });
}

apostas.forEach(aposta => {
    if (aposta.numeros.every(numero => resultado.includes(numero))) {
        console.log('Aposta vencedora:', aposta);
    }
});
console.log('Resultado:', resultado);
