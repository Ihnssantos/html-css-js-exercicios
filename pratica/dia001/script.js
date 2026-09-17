let botao = document.querySelector("#botao");
let lista = document.querySelector("#lista");

botao.addEventListener("click", function () {
    let item1 = document.createElement("li");
    let item2 = document.createElement("li");
    let item3 = document.createElement("li");
    let item4 = document.createElement("li");
    let item5 = document.createElement("li");
    let item6 = document.createElement("li");

    item1.textContent = "Java";
    item2.textContent = "Spring";
    item3.textContent = "SQL";
    item4.textContent = "HTML";
    item5.textContent = "CSS";
    item6.textContent = "JavaScript";

    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);
    lista.appendChild(item4);
    lista.appendChild(item5);
    lista.appendChild(item6);
})