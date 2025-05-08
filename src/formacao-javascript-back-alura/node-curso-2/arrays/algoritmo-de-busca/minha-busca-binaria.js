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
            fim = meio + 1;
        }
    }

    return -1;
}