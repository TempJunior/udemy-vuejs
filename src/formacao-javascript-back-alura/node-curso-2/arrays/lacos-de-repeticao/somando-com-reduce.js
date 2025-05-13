const numeros = [1, 2, 3, 4, 5];

const somaComReduce = numeros.reduce((soma, numero) => soma + numero);

console.log(`Soma do array: ${numeros.join(' ')} com reduce = ${somaComReduce}`);

//Filtrando elementos

const numerosAcimaDeDois = numeros.filter(n => n > 2);

console.log(numerosAcimaDeDois)