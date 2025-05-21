const car = {
    marca: 'Volks',
    modelo: 'Sedan',
    ano: 1992,
    cor: 'Vermelho',
}

const carroNovoComDetalhes = {
    ...car,
    placa: 'ABC-1234',
    motor: '1.0',
    combustivel: 'Gasolina',
    portas: 4,
    arCondicionado: true,
    automatico: true,
}

console.log(carroNovoComDetalhes);

