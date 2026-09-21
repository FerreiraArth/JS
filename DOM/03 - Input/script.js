const titulo = document.querySelector("#titulo");
const nome = document.querySelector("#nome");
const mostrar = document.querySelector("#mostrar");

mostrar.addEventListener("click", () => {
    if (nome.value === ""){
        titulo.textContent = `Por favor, digite seu nome!`
    }else {
        titulo.textContent = `Ola ${nome.value}!`
        nome.value = "";
    }
})