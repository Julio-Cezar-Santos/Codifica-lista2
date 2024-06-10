const arrayNumeros = [];

while(arrayNumeros.length <= 20){
    let numero = Math.floor(Math.random() * 100 + 1);
    if(!arrayNumeros.includes(numero)){
        arrayNumeros.push(numero);
    }
}

arrayNumeros.sort((a, b) => a - b);

arrayNumeros.forEach(numero => console.log(numero));