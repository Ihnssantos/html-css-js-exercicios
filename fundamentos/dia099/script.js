const botao = document.querySelector("#buscar");
const lista = document.querySelector("#usuarios");

botao.addEventListener("click", async () => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    const usuarios = await resposta.json();

    usuarios.forEach((usuario) => {
        const li = document.createElement("li");

        li.textContent = usuario.name;

        lista.appendChild(li);
    });
});
