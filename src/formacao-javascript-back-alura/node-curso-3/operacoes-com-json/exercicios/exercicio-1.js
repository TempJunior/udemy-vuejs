const biblioteca = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        anoPublicacao: 1954
    },
    {
        id: 2,
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        anoPublicacao: 1605
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        anoPublicacao: 1949
    }
]

function encontraLivroPorId(lista, id){
    return lista.find((livro) => livro.id === id);
}

const livroEncontrado = encontraLivroPorId(biblioteca, 1)
console.log(livroEncontrado);