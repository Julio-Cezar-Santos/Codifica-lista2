let inventarioLojaA = {
    macas: 100,
    bananas: 200,
    laranjas: 300
};

let inventarioLojaB = {
    bananas: 300,
    laranjas: 400,
    peras: 500
};

function combinarInventarios(lojaA, lojaB) {
    let inventarioCombinado = {};
    for (let item in lojaA) {
        inventarioCombinado[item] = lojaA[item];
    }
    for (let item in lojaB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += lojaB[item];
        } else {
            inventarioCombinado[item] = lojaB[item];
        }
    }
    return inventarioCombinado;
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));