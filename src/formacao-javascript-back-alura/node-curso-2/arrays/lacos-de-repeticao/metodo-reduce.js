const produtos = [
    { nome: 'Camisa', preco: 59.90 },
    { nome: 'Calça Jeans', preco: 129.90 },
    { nome: 'Tênis', preco: 239.99 },
    { nome: 'Boné', preco: 35.00 },
    { nome: 'Jaqueta', preco: 299.90 },
    { nome: 'Meias', preco: 19.90 },
    { nome: 'Relógio', preco: 499.00 },
    { nome: 'Cinto', preco: 45.50 }
];

const produtosFiltrados = produtos.reduce((listaFiltrada, produtoAtual) => {
    if (produtoAtual.preco > 100) {
        listaFiltrada.push(produtoAtual);
    }

    return listaFiltrada;
}, []);

console.log(produtosFiltrados);