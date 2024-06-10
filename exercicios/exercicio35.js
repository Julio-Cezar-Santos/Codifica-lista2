const array = [];
for (let i = 0; i < 30; i++) {
    array.push(Math.floor(Math.random() * 100));
}

const arrayPar = [];
const arrayImpar = [];


for (let i = 0; i < array.length; i++) {
    if (arrayPar.length < 5 && arrayImpar.length < 5) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i]);
        } else if (array[i] % 2 !== 0) {
            arrayImpar.push(array[i]);
        }
    }
}

console.log("Array:", array);
console.log("Array par:", arrayPar);
console.log("Array impar:", arrayImpar);

