const aumentar = document.querySelector("#aumentar");
const diminuir = document.querySelector("#diminuir");
const elementoContador = document.querySelector("#contador");
const zerar = document.querySelector("#zerar");

let contador = 0

aumentar.addEventListener("click", () => {
    contador += 1
    elementoContador.textContent = contador
})
diminuir.addEventListener("click", () => {

    if (contador > 0) {
        contador -= 1
        elementoContador.textContent = contador
    }
})
zerar.addEventListener("click", () => {
    contador = 0
    elementoContador.textContent = contador
})
