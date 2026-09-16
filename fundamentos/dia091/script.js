let pessoa = {
    nome: "Igor",
    idade: 25,
    linguagem: "Java"
};

let json = JSON.stringify(pessoa);//transforma um objeto em um JSON

console.log(json);



let texto = '{"nome":"Igor","idade":25,"linguagem":"Java"}';

let pessoaConvertida = JSON.parse(texto);//transforma JSON em um objeto

console.log(pessoaConvertida);