const notas = [10,5,6,9,8,7];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

console.log('Soma das notas: ', somaNotas / notas.length);