let formulario = document.querySelector("#formulario");
let inputNome = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = inputNome.value;

    if (nome === "") {
        resultado.textContent = "Digite um nome";
    } else {
        resultado.textContent = "Cadastro realizado: " + nome;
    }
});