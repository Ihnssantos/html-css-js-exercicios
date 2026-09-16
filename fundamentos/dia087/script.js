let inputNome = document.querySelector("#nome");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

botao.addEventListener("click", function() {
    let nome = inputNome.value;

    resultado.textContent = "Olá, " + nome;
})