const titulo = document.querySelector("#titulo");
const nome = document.querySelector("#nome");
const mostrar = document.querySelector("#mostrar");

mostrar.addEventListener("click", () => {
    titulo.textContent = `Ola ${nome.value}!`
})