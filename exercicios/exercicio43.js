let obj1 = {
    nome: 'João',
    idade: 25,
    email: 'joao@email.com',
    carros: ['Gol', 'Uno', 'Celta'],
    casaPropria: false
}

let obj2 = {
    nome: 'Maria',
    idade: 30,
    email: 'maria@email.com',
    numeros: [4, 5, 6],
    letras: ['d', 'e', 'f'],
    cores: ['azul', 'vermelho', 'rosa']
}

function combinarObjetos(obj1, obj2) {
    let novoObj = {};
    for (let prop in obj1) {
        novoObj[prop] = obj1[prop];
    }
    for (let prop in obj2) {
        novoObj[prop] = obj2[prop];
    }
    return novoObj;
}

console.log(combinarObjetos(obj1, obj2));