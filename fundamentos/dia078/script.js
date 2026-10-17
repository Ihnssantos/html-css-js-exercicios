const nomeExibe = document.getElementById("nome");
const idadeExibe = document.getElementById("idade");
const cidadeExibe = document.getElementById("cidade");

const usuario = {
  nome: "Carlos",
  idade: 25,
  cidade: "São Paulo",
};

const { nome, idade, cidade } = usuario;

nomeExibe.innerHTML = `Nome: ${nome}`;
idadeExibe.innerHTML = `Idade: ${idade}`;
cidadeExibe.innerHTML = `Cidade: ${cidade}`;
