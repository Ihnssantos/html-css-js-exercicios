const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const empresa = document.getElementById("empresa");

const usuario = async () => {
  const dados = await fetch("https://jsonplaceholder.typicode.com/users/2");

  const trataDados = await dados.json();

  console.log(trataDados);

  nome.textContent = `Nome: ${trataDados.name}`;
  telefone.textContent = `Telefone: ${trataDados.phone}`;
  empresa.textContent = `Empresa: ${trataDados.company.name}`;
};

usuario();
