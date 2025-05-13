const objPessoa = {
    nome: 'Junior Oliveira',
    idade: 25,
    cpf: '24111222344',
    turma: 'JavaScript',
    enderecos: [
        {
            rua: 'Damais um pinto',
            numero: '78',
            complemento: 'apto 43'
        },
        {
            rua: 'Julio cesar',
            numero: '60',
            complemento: null
        }]
}


for (let chave in objPessoa) {
    const tipo = typeof objPessoa[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `A chave ${chave} tem o valor de ${objPessoa[chave]}`
        console.log(texto);
    }
}
