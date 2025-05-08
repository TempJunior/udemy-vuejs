import { quicksort } from "../algoritmo-de-ordenacao/quicksort.js";

function geraArrayOrdenado(tamanho) {
    let arr = []
    for (let i = 0; i < tamanho; i++) {
        arr.push(i * 2);
    }
    return arr;
}

const listaDeNumeros = [1,29,88,76,3,4,6,44,355,342,2,99,122];

function buscaBinaria(lista, target) {
    let inicio = 0;
    let fim = lista.length - 1;

    while(inicio <= fim){
        let meio = Math.floor((inicio + fim)/2);

        if (lista[meio] === target){
            return meio;
        }else if (lista[meio] < target){
            inicio = meio + 1;
        }else {
            fim = meio - 1;
        }
    }
    return -1;
}

const listaOrdenada = quicksort(listaDeNumeros);
console.log(listaOrdenada.join(" "));
console.log(buscaBinaria(listaOrdenada, 29));

//Teste de tempo
const arrGrande = geraArrayOrdenado(1000000);
const valorProcurado = 999998;

const inicio = performance.now();
const result = buscaBinaria(arrGrande, valorProcurado);
const fim = performance.now();

console.log('Indice encontrado: ',  result);
console.log('Tempo de execução', (fim - inicio).toFixed(4), 'ms');