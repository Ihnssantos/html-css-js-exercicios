let lista = document.querySelector("#lista");
let adicionar = document.querySelector("#adicionar");
let remover = document.querySelector("#remover");

adicionar.addEventListener("click", function() {
    let paragrafo = document.createElement("p");

    paragrafo.textContent = "Novo elemento";

    lista.appendChild(paragrafo);
});

remover.addEventListener("click", function() {
    let paragrafo = lista.querySelector("p");

    if (paragrafo) {
        paragrafo.remove();
    }
});