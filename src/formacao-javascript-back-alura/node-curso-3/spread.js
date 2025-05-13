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

function exibirTelefones(tel1, tel2){
    console.log(`Ligar para ${tel1}`);
    console.log(`Ligar para ${tel2}`);
}

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);

