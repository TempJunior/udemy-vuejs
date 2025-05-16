const catalogoFilmes = [
    {id: 1,
        titulo: "Matrix",
        diretor: "Lana Wachowski",
        anoLancamento: 1999
    },
    {id: 2,
        titulo: "Jurassic Park",
        diretor: "Steven Spielberg",
        anoLancamento: 1993
    },
    {
        id: 3,
        titulo: "Inception",
        diretor: "Christopher Nolan",
        anoLancamento: 2010
    }
]

function filtraPorAno(lista, anoLancamento) {
    return lista.filter((filme) => filme.anoLancamento === anoLancamento);
}

const filmesFiltrados = filtraPorAno(catalogoFilmes, 1999);
console.log(filmesFiltrados);
