const botao = document.querySelector("#botao")
const modo = document.querySelector("#status")

botao.addEventListener("click", () => {
    
    if (modo.textContent === "Modo escuro") {
        modo.textContent = "Modo claro"
        botao.textContent = "Modo escuro"
    } else {
        modo.textContent = "Modo escuro"
        botao.textContent = "Modo claro"
    }
})
