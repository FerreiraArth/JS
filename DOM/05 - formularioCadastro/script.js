const cadastrar = document.querySelector("#cadastrar");
const mensagem = document.querySelector("#mensagem");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");

cadastrar.addEventListener("click", () => {
    if (nome.value === "") {
        mensagem.textContent = `Por favor, digite seu nome`;
    } else if (idade.value === "") {
        mensagem.textContent = "Por favor, digite sua idade";
    } else if (idade.value < 18) {
        mensagem.textContent = "Cadastro não realizado! Precisa ter 18 ou mais";
    } else {
        mensagem.textContent = `Cadastro realizado ${nome.value}`;
    }
 
})
