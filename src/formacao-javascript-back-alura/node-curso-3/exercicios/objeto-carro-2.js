const carro = {
    marca: 'Volks',
    modelo: 'Sedan',
    ano: 1992,
    cor: 'Vermelho'
}

for (let atributos in carro){
    console.log(`${atributos}: ${carro[atributos]}`);
}

carro.motor = 2.00;
carro.rodas = 'Aro 22'
console.log('------------------------------------------------')
for (let atributos in carro){
    console.log(`${atributos}: ${carro[atributos]}`);
}