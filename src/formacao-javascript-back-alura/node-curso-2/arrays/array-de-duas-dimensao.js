const alunos = ['Junião', 'Brunão', 'Guilherme', 'Gustavo'];
const media = [10, 8, 3, 9];

const matriz = [alunos, media];
console.log(
    `O aluno(a) da posição 1 é ${matriz[0][1]} e a nota é ${matriz[1][1]}.`
);

const larguraColuna = () =>  Math.max(...matriz.flat().map(i =>  i.toString().length));

const formataValor = (valor, largura) => valor.toString().padStart(largura, '');



console.log('Matriz completa: ')
for (let i = 0; i < matriz.length; i++) {
    let linhaFormatada = matriz[i]
        .map(valor => formataValor(valor, larguraColuna()))
        .join(' | ');
    console.log(`| ${linhaFormatada} |`);
}