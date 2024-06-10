let dados = {
    nome: 'João',
    idade: 25,
    email: 'joao@email.com',
    numeros: [1, 2, 3],
    letras: ['a', 'b', 'c']
}

function contarStrings(obj) {
    let contador = 0;
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            contador++;
        }
    }
    return contador;
}

console.log(contarStrings(dados));