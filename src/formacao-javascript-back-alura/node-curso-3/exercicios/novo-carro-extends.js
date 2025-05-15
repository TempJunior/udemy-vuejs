const car = {
    marca: 'Volks',
    modelo: 'Sedan',
    ano: 1992,
    cor: 'Vermelho',
}

const novoCar = {
    ...car,
    motor: '2.0',
}

console.log(novoCar)