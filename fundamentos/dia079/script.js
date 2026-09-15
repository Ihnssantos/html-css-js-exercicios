let numeros = [10, 20, 30, 40, 50];

//map() - transforma
let dobrados = numeros.map(function(numero) {
    return numero * 2;
});


//filter() - filtra
let maiores = numeros.filter(function(numero) {
    return numero >= 30;
})


//find() - encontra (primeiro elemento que satisfaz a condição)
let encontrado = numeros.find(function(numero) {
    return numero > 30;
})


//includes() - verifica existencia
console.log(numeros.includes(20));//true
