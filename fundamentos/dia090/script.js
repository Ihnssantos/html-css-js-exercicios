let formulario = document.querySelector("#formulario");
let estudos = document.querySelector("#estudo");
let lista = document.querySelector("#lista");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let estudo = estudos.value;

    if (estudo === "") {
        return;
    }

    let item = document.createElement("li");

    item.textContent = estudo;

    lista.appendChild(item);
})