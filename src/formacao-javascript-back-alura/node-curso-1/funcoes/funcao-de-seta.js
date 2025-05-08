const estudanteReprovou = (notaFinal, faltas) => {
    return notaFinal < 7 && faltas > 4;
}

console.log(estudanteReprovou(8, 1) ? 'Reprovado' : 'Aprovado');

