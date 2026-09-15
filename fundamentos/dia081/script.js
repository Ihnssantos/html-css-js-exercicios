let pessoa = {
    nome: "Igor",
    idade: 25,
    profissao: "Desenvolvedor",

    apresentar: function () {
        console.log("Olá, meu nome é " + this.nome);
    }
};

console.log(pessoa.nome);

pessoa.apresentar();