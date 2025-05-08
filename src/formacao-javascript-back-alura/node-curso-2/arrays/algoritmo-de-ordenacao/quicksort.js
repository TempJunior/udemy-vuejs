export function quicksort(array){
    if(array.length <=1) return array;

    const pivo = array[array.length-1];
    const menores = [];
    const maiores = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo){
            menores.push(array[i]);
        }else {
            maiores.push(array[i]);
        }
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}