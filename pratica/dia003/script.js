let mensagem = document.querySelector("#mensagem");
let botao = document.querySelector("#botao")

botao.addEventListener("click", function () {
    mensagem.classList.toggle("esconder");
})