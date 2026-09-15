let pessoas = [
    {
        nome: "Igor",
        idade: 25
    },

    {
        nome: "João",
        idade: 30
    },

    {
        nome: "Maria",
        idade: 22
    }
];


console.log(pessoas[0].nome);//Igor
console.log(pessoas[2].nome);//Maria


//retorna todos os nomes dos objetos dentro do array pessoas
pessoas.forEach(function(pessoa) {
    console.log(pessoa.nome);
})