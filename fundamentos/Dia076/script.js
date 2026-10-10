const paragrafo = document.getElementById("paragrafo");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  if (paragrafo.style.visibility === "hidden") {
    paragrafo.style.visibility = "visible";
  } else {
    paragrafo.style.visibility = "hidden";
  }
});
