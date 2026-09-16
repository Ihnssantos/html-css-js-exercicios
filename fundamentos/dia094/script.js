function buscarDados() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Dados carregados");
        }, 2000);
    });
}

async function executar() {
    let resultado = await buscarDados();

    console.log(resultado);
}

executar();