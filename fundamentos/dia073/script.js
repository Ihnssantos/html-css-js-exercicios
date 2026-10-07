const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  titulo.innerHTML = "Estou aprendendo DOM";
  titulo.style.color = "aliceblue";
});
