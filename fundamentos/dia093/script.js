let promessa = new Promise(function(resolve, reject) {
    let sucesso = true;

    if (sucesso) {
        resolve("Operação realizada");
    } else {
        reject("Erro na operação");
    }
});


promessa
    .then(function(resultado) {
        console.log(resultado);
    })
    .catch(function(erro) {
        console.log(erro);
    });