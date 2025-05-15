const estudantes = require('./estudantes.json');

function buscaInformacoes(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));
}

console.log(buscaInformacoes(estudantes, 'nome', 'Juliet'));

