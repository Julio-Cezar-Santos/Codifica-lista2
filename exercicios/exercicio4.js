const prompt  = require('prompt-sync')();

function getTriangleSide(sideNumber) {
    let side;
    do {
        side = Number(prompt(`Digite o valor do ${sideNumber} lado do triângulo: `));
        if (isNaN(side)) {
            console.log('Por favor, digite um número válido.');
        } else if (side <= 0) {
            console.log('Por favor, digite um número maior que zero.');
        }
    } while (isNaN(side) || side <= 0);
    return side;
}

function validateTriangle(side1, side2, side3) {
    if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
        return console.log('Os valores informados não formam um triângulo.');
    } else {
        console.log('Os valores informados formam um triângulo.');
    }
}

const side1 = getTriangleSide('primeiro');
const side2 = getTriangleSide('segundo');
const side3 = getTriangleSide('terceiro');

if (side1 && side2 && side3) {
    validateTriangle(side1, side2, side3);
} 