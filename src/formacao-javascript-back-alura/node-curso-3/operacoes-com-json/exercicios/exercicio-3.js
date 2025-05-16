const listaProdutos = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 25.99
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 49.99
    },
    {
        id: 3,
        nome: "Tênis",
        preco: 79.99
    },
    {
        id: 4,
        nome: "Boné",
        preco: 15.99
    }
]

function filtrarOrdenarProdutos(lista ,maxPreco){
    const produtosFiltrados = lista.filter((produto) => produto.preco <= maxPreco);

    return produtosFiltrados.sort((a, b) => {
        if (a.preco > b.preco) return 1;
        if (a.preco < b.preco) return -1;
        return 0;
    })
}

console.log(filtrarOrdenarProdutos(listaProdutos, 79.99));


