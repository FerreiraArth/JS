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

        item.dataset.nome = cadastro.nome;

        botaoRemover.textContent = "Remover";
        selecionar.textContent = "Selecionar";

        lista.appendChild(item);
        item.appendChild(botaoRemover);
        item.appendChild(selecionar);
    })
}

lista.addEventListener("click", (evento) => {

  console.log("Target: ", evento.target);
  console.log("Current: ",  evento.currentTarget);

  if(evento.target.tagName === "LI") {
    console.log("Você clicou no cadastro");

  } else if (evento.target.tagName === "BUTTON") {
    console.log(evento.target.textContent);

    if (evento.target.textContent === "Remover"){
    const item = evento.target.parentElement;
    const nomeCadastro = item.dataset.nome;
    
    const atualizada = cadastros.filter((cadastro) => {
      return cadastro.nome !== nomeCadastro;
    });

    cadastros = atualizada
    renderizarCadastro()
    

    console.log(nomeCadastro)

    } else if (evento.target.textContent === "Selecionar") {
      const item = evento.target.parentElement;

      item.classList.toggle("selecionado")

      console.log("Foi o botão de SELECIONAR");
    }
  }

})

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
