const pessoa = {
    nome: 'Junior Oliveira',
    notas: [10,5,7,9],
    calcularMedias: function (){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i]
        }
        let media = soma / this.notas.length;
        return media.toFixed(2);
    },
    classificarDesempenho: function (){
        const media = parseFloat(this.calcularMedias());
        if (media >= 9){
            console.log(`Excelente GAROTO!`)
        }
        else if (media >= 7.5){
            console.log(`Bom desempenho GAROTO!`)
        }
        else if (media >= 6 ){
            console.log(`Desempenho regular, MELHORE`)
        }
        else {
            console.log(`Você está reprovado!`)
        }
    }
}

console.log(`Sua media de notas é ${pessoa.calcularMedias()}`)
pessoa.classificarDesempenho()