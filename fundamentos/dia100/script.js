const formulario = document.getElementById("formulario");
const idUsuario = document.getElementById("idUsuario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    const id = idUsuario.value;

    if (id === "") {
        resultado.textContent = "Digite um ID.";
        return;
    }

    async function buscarUsuario() {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        const usuario = await resposta.json();

        resultado.innerHTML = "";

        const nome = document.createElement("p");
        nome.textContent = "Nome: " + usuario.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + usuario.email;

        resultado.appendChild(nome);
        resultado.appendChild(email);
    }

    await buscarUsuario();
});
