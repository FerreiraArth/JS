const lista = document.getElementById("lista");

let produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 }
];

function renderizarLista() {
    lista.innerHTML = "";  //LIMPA A LISTA
    produtos.forEach((produto) => {
        const item = document.createElement("li");
        const botaoSelecionar = document.createElement("button");
        const botaoRemover = document.createElement("button");
        
        item.dataset.produto = produto.nome;

        botaoSelecionar.textContent = "Selecionar";
        botaoRemover.textContent = "Remover";

        item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;

        item.appendChild(botaoSelecionar);
        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
};

lista.addEventListener("click", (evento) => {
    if(evento.target.textContent === "Selecionar") {
        const item = evento.target.parentElement;
        item.classList.toggle("destaque");
    } else if (evento.target.textContent === "Remover") {
        const item = evento.target.parentElement;
        const nomeProduto = item.dataset.produto;

        const atualizada = produtos.filter((produto) => {
            return produto.nome !== nomeProduto;
        });
        produtos = atualizada;
        renderizarLista();
    }
})

renderizarLista();