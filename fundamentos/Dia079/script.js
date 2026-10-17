const nome = document.getElementById("nome");
const emails = document.getElementById("emails");
const cidade = document.getElementById("cidade");

const usuario = async () => {
  const dados = await fetch("https://jsonplaceholder.typicode.com/users/1?");

  const converteDados = await dados.json();

  const { name, email, address } = converteDados;

  nome.textContent = `Nome: ${name}`;
  emails.textContent = `E-mail: ${email}`;
  cidade.textContent = `Cidade: ${address.city}`;
};

usuario();
