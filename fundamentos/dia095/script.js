async function buscarUsuario() {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let usuario = await resposta.json();

    console.log(usuario);
}

buscarUsuario();