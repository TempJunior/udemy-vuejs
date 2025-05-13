const array = [10,5,1,3,6,9];

for (let i = 0; i < array.length; i++) {
    console.log(`Indice ${i}: ${array[i]}`);
}

array.forEach((item) => {
    console.log(`Indice ${item}`);
});