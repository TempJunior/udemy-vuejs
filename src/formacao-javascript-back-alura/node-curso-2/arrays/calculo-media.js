const notas = [12,10,8,99]
let soma = 0;
const media = () => {
    for (let i = 0; i < notas.length - 1; i++) {
        soma = notas[i] + notas[i + 1] / notas.length;
    }
    return soma.toFixed(0);
}

console.log(`A media da soma do array é: ${media()}`);


