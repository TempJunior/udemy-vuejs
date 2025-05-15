export const car = {
    marca: 'Volks',
    modelo: 'Sedan',
    ano: 1992,
    cor: 'Vermelho',
    ligado: false,
    ligar: function () {
        if (this.ligado !== true) {
            this.ligado = true
        } else {
            console.log('Carro já está ligado.')
        }
    },
    desligar: function () {
        if (this.ligado !== false) {
            this.ligado = false
        } else {
            console.log('O carro já está desligado')
        }
    },
    obterDetalhes: function () {
        for (let detalhamento in carro) {
            const tipo = typeof carro[detalhamento]
            if (tipo !== 'object' && tipo !== 'function') {
                console.log(`${detalhamento}: ${carro[detalhamento]}`);
            }
        }
    }
}

Object.defineProperty(car, 'placa',{
    value: 'ABC-1234',
    enumerable: false,
});

// for(const props in car) {
//     console.log(`${props}: ${car[props]}`);
// }

// const chaves = Object.keys(car);
// console.log(chaves);
// console.log(car.placa)
