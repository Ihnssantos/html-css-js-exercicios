let titulo = document.querySelector("#titulo");
let botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    titulo.classList.toggle("destaque");
});