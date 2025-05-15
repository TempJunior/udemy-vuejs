const pessoaOriginal = {
    id: 1,
    nome: 'John',
    idade: 34,
}

function clonaPessoa(objPessoa) {
    return {
        ...objPessoa,
        altura: 99
    };
}

// console.log(pessoaOriginal);
// console.log(clonaPessoa(pessoaOriginal));

// copiarObjetoJson.js

// Função para copiar objetos JSON
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// Criação do objeto original (pessoa)
const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

// Utiliza a função para criar uma cópia do objeto original
const pessoaModificada = copiarObjetoJson(pessoaOriginal);

// Modifica a cópia do objeto (pessoa modificada)
pessoaModificada.altura = 99;

// Imprime no console ambos os objetos
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)
