const notas = [9, 8, 6, 4]
let media = 0;

const somaMedia = () => {
    for (let i = 0; i < notas.length - 1; i++) {
        media = notas[i] + notas[i + 1] / notas.length
    }
    return media;
}

console.log(`A soma da media das notas ${notas} é ${somaMedia()}`)

notas[1] = 99;
console.log(`A soma da media das notas ${notas} agora é ${somaMedia()}`)

console.log(notas)
notas.pop()
console.log(notas)
