const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2019,
    valor: 20000,
    detalhar() {
        return `${this.marca} ${this.modelo} ${this.ano} ${this.valor}`
    }
}

console.log(carro.detalhar()); 