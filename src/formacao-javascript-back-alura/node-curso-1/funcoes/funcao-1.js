function exibeNome(nome){
    console.log(nome)
}
exibeNome('Numero');

function retornaNomeOuEstranho(nome){
    return nome ?? 'Estranho'
}

function exibeInformacoesEstudante(nota, nome){
    console.log(`A nota da muie(h) é ${nota} e o nome é ${nome}`)
}
exibeInformacoesEstudante(10, 'Geovanna');

function retornaInformacoes(idade, turma){
    return `A idade do ${retornaNomeOuEstranho('Junior')} é ${idade} e ele é da turma ${turma}`
}

console.log(retornaInformacoes(25, 'Do baralho'))

console.log(retornaNomeOuEstranho('Junin'));
console.log(retornaNomeOuEstranho());

