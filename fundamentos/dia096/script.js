let botao = document.querySelector("#buscar");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");

botao.addEventListener("click", async function() {

    let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let usuario = await resposta.json();

    nome.textContent = usuario.name;
    email.textContent = usuario.email;
});