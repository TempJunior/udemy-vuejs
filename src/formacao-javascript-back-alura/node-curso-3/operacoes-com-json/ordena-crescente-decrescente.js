function ordenaCresOuDesc(lista, propriedade, decrescente = false){
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof  valorA === 'string'){
            valorA = valorA.toUpperCase();
        }
        if (typeof  valorB === 'string'){
            valorB = valorB.toUpperCase();
        }
        if (valorA < valorB){
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB){
            return decrescente ? -1 : 1;
        }
        return 0;
    })
}

const estudantes = require('./estudantes.json');

const listaOrdenada = ordenaCresOuDesc(estudantes, 'nome', false);
console.log(listaOrdenada);