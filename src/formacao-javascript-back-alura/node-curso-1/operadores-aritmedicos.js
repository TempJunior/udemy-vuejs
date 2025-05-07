const primeiraNota = 8;
const segundaNota = 2;
const terceiraNota = 10;
const quartaNota = 6;

let media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

if(media >= 7){
    media += media + 0.1;
}

console.log(`A media é ${media.toFixed(2)} seu merdia`);

