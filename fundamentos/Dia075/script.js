const input = document.getElementById("input");
const botao = document.getElementById("botao");
const paragrafo = document.getElementById("paragrafo");

botao.addEventListener("click", () => {
  let msg = input.value;

  paragrafo.textContent = `Olá, ${msg}`;
});
