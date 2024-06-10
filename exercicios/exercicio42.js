let dados = {
    nome: 'João',
    idade: 25,
    email: 'joao@email.com',
    numeros: [1, 2, 3],
    letras: ['a', 'b', 'c']
}

function filtrarArrays(obj) {
    let novoObj = {};
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            novoObj[prop] = obj[prop];
        }
    }
    return novoObj;
}

console.log(filtrarArrays(dados));