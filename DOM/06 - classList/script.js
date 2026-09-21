const cor = document.querySelector("#status");
const alterar = document.querySelector("#alterar");
// const remover = document.querySelector("#remover");

// alterar.addEventListener("click", () => {
//     cor.classList.add("destaque")
// })
// remover.addEventListener("click", () => {
//     cor.classList.remove("destaque")
// })

alterar.addEventListener("click", () => {
    cor.classList.toggle("destaque")
})