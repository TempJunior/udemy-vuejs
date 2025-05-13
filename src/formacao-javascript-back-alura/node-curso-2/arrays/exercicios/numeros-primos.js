const numeros = [2, 3, 88, 89, 14, 13, 17, 1, 54, 65, 12];

const ehPrimo = (n) => {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (ehPrimo(numero)) {
        console.log(`Numero na posição: ${i}: ${numero} é primo.`);
    }else{
        console.log(`Numero na posição ${i}: ${numero} não é primo.`);
    }
}