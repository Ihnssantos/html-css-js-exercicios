let frutas = ["Maçã", "Banana", "Uva", "Manga", "Pera"];
//                     0        1        2       3        4

console.log(frutas[1]); //Banana

//adciona um elemento no final do array
frutas.push("Laranja");

//adciona um elemnto no inicio do array
frutas.unshift("Morango");

//remove o ultimo elemento do array
frutas.pop();

//remove o primeiro elmento do array
frutas.shift();

//retorna o índice do elemento
console.log(frutas.indexOf("Maçã")); //0