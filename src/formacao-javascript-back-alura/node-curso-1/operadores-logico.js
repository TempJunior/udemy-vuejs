const notaFinal = 7
const faltas = 5
const advertencias = 0

//Aqui é ou -- se um ou outro for true
if(notaFinal < 7 || faltas > 4){
    console.log('Ta reprovado fi, boa sorte! haha')
}else{
    console.log('Ta aprovadão fiot')
}

if (notaFinal > 7 && faltas > 4){
    console.log('Ta reprovado maluco do cabelo tronxo, boa sorte! haha')
}else {
    console.log('Não sei como, mas passou. Favelado!')
}


/*Operador !
* Podemos pensar a seguinte situação. As advertencias são 0, então na tabela
* de verdade e mentira o numero 0 é falso, então mudando o valor de advertencias
* para TRUE. Se as advertencias forem maior que zero, partira a ser True
* e logo o operador retornara FALSE. Assim temos a consistencia no codigo
* onde as duas operações precisam ser verdadeiras.*/
if (faltas <= 4 && !advertencias){
    console.log('Ganhou um bonus bem grande.')
}else{
    console.log('Ganhou foi chute!')
}