const alunos = ['João', 'Pitoco', 'Manhoso'];
const medias = [10, 9, 6];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)){
        const indice = lista[0].indexOf(aluno);
        const mediaDoAluno = lista[1][indice];
        console.log(`O aluno ${aluno} tem a media ${mediaDoAluno}`);
    }else{
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota('Pitoco');
exibeNomeENota('Junin');