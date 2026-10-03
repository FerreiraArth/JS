let nomes = ["Arthur", "Arthur", "Bruna", "Carlos", "Daniela", "Eduardo", "Douglas"];

const lista = document.getElementById("lista");

function renderizarLista() {

    lista.innerHTML = "";  //LIMPA A LISTA

    nomes.forEach((nome) => {
        const item = document.createElement("li");
        const botaoSelecionar = document.createElement("button");
        const botaoRemover = document.createElement("button");

        item.dataset.lista = nome;

        botaoSelecionar.textContent = "Selecionar";
        botaoRemover.textContent = "Remover";
        
        item.textContent = nome;
        item.appendChild(botaoSelecionar);
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

lista.addEventListener("click", (evento) => {

    if(evento.target.textContent === "Selecionar") {

        const item = evento.target.parentElement;
        item.classList.toggle("destaque");

        console.log("Você clicou no botão de selecionar");
    } else if (evento.target.textContent === "Remover") {
        
        const item = evento.target.parentElement;
        const nomeCadastro = item.dataset.lista;

        const atualizada = nomes.filter((nome) => {
            return nome !== nomeCadastro;
        });

        nomes = atualizada;
        
        console.log("remover", nomeCadastro);
        renderizarLista();
    }

})

renderizarLista();