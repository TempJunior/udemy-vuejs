const estudante = {
    nome: 'Junior Oliveira',
    idade: 25,
    cpf: '24111222344',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11948788963', '1988744563'],
    enderecos: {
        rua: 'Damais um pinto',
        numero: '78',
        complemento: 'apto 43'
    }
}

console.log(
    estudante.enderecos.complemento,
    estudante.enderecos.rua
);
