const deposito = 10500;
let saldo = 0;
const saque = 500;


if (deposito) {
    console.log(`Valor de deposito na conta do sacana: ${deposito}`)
    saldo = deposito;
    console.log(`Esse é o saldo que o safado tem na conta agora: ${saldo}`)
}

if (saque) {
    console.log(`Agora o safado quer sacar: ${saque}, ta liberado? `)
    saldo -= saque
    console.log(`Valor da conta agora: ${saldo}`)
}

//Usando ternario para par ou impar
const numeroUm = 7;
const seraQueEPar = numeroUm % 2 === 0 ? 'Numero par' : 'Numero impar';

console.log(seraQueEPar)




