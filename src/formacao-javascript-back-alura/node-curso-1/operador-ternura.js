let souBonito = false

console.log('Geovanna, o Junior é bonito? ')

const respostaGeovanna = 'Sim'
console.log(respostaGeovanna)

const verificacaoDeLindeza = respostaGeovanna === 'Sim' ?
    souBonito = true : souBonito

const retornaFeioOuBonito = verificacaoDeLindeza ? 'Você é um gatão!' :
    'Poxa, você é feinho'

console.log(retornaFeioOuBonito)

const numeroParesOuImpar = Math.random().toFixed(2);
const valorDoPar = numeroParesOuImpar % 2 === 0 ? 'Numero par' : 'Numero Impar';

console.log(`O numero ${numeroParesOuImpar} é ${valorDoPar}`)




