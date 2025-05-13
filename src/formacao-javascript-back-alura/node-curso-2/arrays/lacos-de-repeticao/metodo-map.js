const notas = [10,9,8,7,6,5]

const notasAtualizadas = notas.map((nota) => nota +1 >= 10 ? 10
: nota + 1);

console.log(notasAtualizadas);