//guardar dados localmente
localStorage.setItem("nome", "Igor");
//                   chave   valor


let nome = localStorage.getItem("nome");//buscando dado guardado pela chave

console.log(nome);


localStorage.removeItem("nome");//removendo o dado pela chave
