const precos = [10, 3, 4, 5];

const precosFormatados = precos.map((preco) => `R$${preco.toFixed(2)}`)
console.log(precosFormatados.join(' | '));

const pessoa = [
    {
        nome: 'Junior',
        idade: 25,
        peso: 76.00
    },
    {
        nome: 'Geovanna',
        idade: 22,
        peso: 61.00
    },
];

const mensagem = pessoa.map((pesso) => pesso.nome);
console.log(mensagem.join(' '));