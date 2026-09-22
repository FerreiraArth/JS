const cadastrar = document.querySelector("#cadastrar");
const mensagem = document.querySelector("#mensagem");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const lista = document.querySelector("#listaCadastros");

let cadastros = [];

function renderizarCadastro() {
    lista.innerHTML = "";  //LIMPA A LISTA

    cadastros.forEach((cadastro) => {
        const item = document.createElement("li");
        const botaoRemover = document.createElement("button");
        const selecionar = document.createElement("button");

        item.textContent = `${cadastro.nome} - ${cadastro.idade}`;
        botaoRemover.textContent = "Remover";
        selecionar.textContent = "Selecionar";

        lista.appendChild(item);
        item.appendChild(botaoRemover);
        item.appendChild(selecionar);

        selecionar.addEventListener("click", () => {
          item.classList.toggle("selecionado");
        })

        botaoRemover.addEventListener("click", () => {
            const atualizada = cadastros.filter((cadastroDaLista) => {
                return cadastroDaLista !== cadastro;
            })

            cadastros = atualizada
            renderizarCadastro()
        });

    })
}

function validarCadastro() {
  const nomeTratado = nome.value.trim();
  const idadeTratada = Number(idade.value);

  if (nomeTratado === "") {
    mensagem.textContent = `Por favor, digite seu nome`;
  } else if (idade.value === "") {
    mensagem.textContent = "Por favor, digite sua idade";
  } else if (idadeTratada < 18 || idadeTratada > 120) {
    mensagem.textContent =
      "Cadastro não realizado! A idade deve estar entre 18 e 120 anos.";
  } else {
    mensagem.textContent = `Cadastro realizado ${nomeTratado}`;

    const cadastro = {
      nome: nomeTratado,
      idade: idadeTratada,
    };

    cadastros.push(cadastro);
    
    renderizarCadastro();

    nome.value = "";
    idade.value = "";
  }
  
}

cadastrar.addEventListener("click", validarCadastro);
