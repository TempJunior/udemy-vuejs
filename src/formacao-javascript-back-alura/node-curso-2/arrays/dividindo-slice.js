const nomesDaFesta = ['Junior', 'Geovanna', 'Mario', 'Joselito Pai']

console.log(nomesDaFesta);

nomesDaFesta.push('Angelita');
console.log(nomesDaFesta);

nomesDaFesta.push('Alessandro')
console.log(nomesDaFesta);

nomesDaFesta.pop();
console.log(nomesDaFesta);

const mesa1 = nomesDaFesta.slice(0, nomesDaFesta.length / 2);
const mesa2 = nomesDaFesta.slice(nomesDaFesta/2);

console.log(mesa1);
console.log(mesa2);