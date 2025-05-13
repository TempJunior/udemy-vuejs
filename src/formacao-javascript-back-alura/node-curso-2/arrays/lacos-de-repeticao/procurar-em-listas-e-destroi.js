const alunos = ['Joca', 'Pitoco', 'Manhoso'];
const medias = [11, 9, 6];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`O aluno ${aluno} tem a media ${mediaDoAluno}`);
    }else{
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota('Pitoco');
exibeNomeENota('Junin');