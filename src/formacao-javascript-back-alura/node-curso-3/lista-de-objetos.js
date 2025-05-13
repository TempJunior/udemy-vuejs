const estudante = {
    nome: 'Junior Oliveira',
    idade: 25,
    cpf: '24111222344',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11948788963', '1988744563'],
    enderecos: [
        {
            rua: 'Damais um pinto',
            numero: '78',
            complemento: 'apto 43'
        },
        {
            rua: 'Julio cesar',
            numero: '60',
            complemento: ''
        }]
};


estudante.enderecos.push({rua: 'Chavasca molhada', numero: '60', complemento: 'casa mal assombrada'
})


const listaDeEnderecos = estudante.enderecos.filter((endereco) => endereco.complemento)

console.log(listaDeEnderecos)