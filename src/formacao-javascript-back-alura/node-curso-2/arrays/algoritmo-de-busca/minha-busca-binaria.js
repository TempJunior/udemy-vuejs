function gerarArrayOrdenado(tamanhoArray){
    let arr = []
    for (let i = 0; i < tamanhoArray; i++) {
        arr.push(i * 2)
    }
    return arr;
}

function minhaBuscaBinaria(lista, target) {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor(inicio + fim) / 2;

        if (lista[meio] === target) {
            return meio;
        }else if (lista[meio] < target) {
            inicio = meio + 1;
        }else {
            fim = meio - 1;
        }
    }

    return -1;
}

const tamanhoDoArray = gerarArrayOrdenado(1000000);
const target = 9998;

const inicio = performance.now();
const result = minhaBuscaBinaria(tamanhoDoArray, target);
const fim = performance.now();

console.log('Indice encontrado: ',  result);
console.log(`O tempo de execução é: ${(inicio - fim).toFixed(4)} ms`)