const listaJsonAnimais = require('./animais.json')
console.log(listaJsonAnimais);

listaJsonAnimais.animais.push({
    id: 4,
    nome: 'JavaScript',
    tipo: 'ReactJS',
    habitat: 'Navegador'
});

console.log(listaJsonAnimais.animais);

listaJsonAnimais.animais[3].habitat = 'Piriri';

console.log(listaJsonAnimais.animais);

listaJsonAnimais.animais.splice(3, 1);

console.log(listaJsonAnimais.animais);

const listaString = JSON.stringify(listaJsonAnimais.animais);

console.log(listaString);

