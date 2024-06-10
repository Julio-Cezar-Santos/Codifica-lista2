const vendas = [
    { vendedor: "Carlos", valor: 100.50 },
    { vendedor: "Ana", valor: 200.00 },
    { vendedor: "Carlos", valor: 150.75 },
    { vendedor: "Bruno", valor: 250.10 },
    { vendedor: "Ana", valor: 300.45 },
    { vendedor: "Carlos", valor: 400.00 },
    { vendedor: "Bruno", valor: 350.30 },
    { vendedor: "Ana", valor: 450.50 },
    { vendedor: "Carlos", valor: 500.00 },
    { vendedor: "Bruno", valor: 600.75 }
];

function totalVendasPorVendedor(vendas) {
    let totalVendas = {};
    vendas.forEach(venda => {
        if (totalVendas[venda.vendedor]) {
            totalVendas[venda.vendedor] += venda.valor;
        } else {
            totalVendas[venda.vendedor] = venda.valor;
        }
    });
    return totalVendas;
}

console.log(totalVendasPorVendedor(vendas));