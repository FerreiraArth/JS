const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const botao = document.querySelector("#botao")

titulo.textContent = "Meu primeiro projeto com JavaScript";
descricao.textContent = "Estou aprendendo a manipular o DOM!";
botao.addEventListener("click", () => {
    descricao.textContent = "Você clicou no botão! 🎉";
})