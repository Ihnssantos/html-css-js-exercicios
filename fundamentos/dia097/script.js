async function cadastrarUsuario() {

    let usuarios = {
        name: "Igor",
        email: "igor@gmail.com"
    };

    let resposta = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",

        header: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(usuario)
    });

    let resultado = await resposta.json();

    console.log(resultado);
}

cadastrarUsuario();

