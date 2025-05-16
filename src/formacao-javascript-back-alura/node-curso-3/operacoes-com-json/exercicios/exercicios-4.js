const animais = [
    {
        id: 1,
        nome: "Leão",
        especie: "Felino",
        idade: 5
    },
    {
        id: 2,
        nome: "Elefante",
        especie: "Mamífero",
        idade: 10
    },
    {
        id: 3,
        nome: "Pinguim",
        especie: "Ave",
        idade: 3
    }
]

function ordenar(lista, propriedade, decrescente = false) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if ( typeof valorA === 'string' ) {
            valorA = valorA.toUpperCase();
        }
        if ( typeof valorB === 'string' ) {
            valorB = valorB.toUpperCase();
        }
        if ( valorA < valorB ) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB ) {
            return decrescente ? -1 : 1;
        }
        return 0;
    })
}

console.log(ordenar(animais, 'idade'));
