const paragrafo = document.getElementById("paragrafo");
const botao = document.getElementById("botao");

let clique = 0;

botao.addEventListener("click", () => {
  clique++;
  paragrafo.textContent = `Cliques: ${clique}`;
});
