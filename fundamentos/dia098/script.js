//PUT (atualizar)
async function atualizarUsuario() {

    let usuario = {
        name: "Igor Henrique",
        email: "igor@email.com"
    };

    let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)
    });

    let resultado = await resposta.json();

    console.log(resultado);
}

atualizarUsuario();



//DELETE
async function deletarUsuario() {

    let resposta = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    });

    console.log(resposta.status);
}

deletarUsuario();
