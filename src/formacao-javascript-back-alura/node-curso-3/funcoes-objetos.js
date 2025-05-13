const objPessoa = {
    nome: 'Junior Oliveira',
    idade: 25,
    cpf: '24111222344',
    turma: 'JavaScript',
    media: 7.5,
    estaAprovado: function (media){
        return this.media <= media;
    },
}

console.log(objPessoa.estaAprovado(6));

