const estudante = {
    nome: 'Junior Oliveira',
    idade: 25,
    cpf: '24111222344',
    turma: 'JavaScript'
}

function exibeInfo (objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfo(estudante, ['cpf']));