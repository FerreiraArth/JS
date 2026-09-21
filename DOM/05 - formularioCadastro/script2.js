const cadastrar = document.querySelector("#cadastrar");
const mensagem = document.querySelector("#mensagem");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const lista = document.querySelector("#listaCadastros");

const cadastros = [];

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
    
    const item = document.createElement("li");
    item.textContent = `${cadastro.nome} - ${cadastro.idade}`;
    lista.appendChild(item)

    nome.value = "";
    idade.value = "";
  }
  
}

cadastrar.addEventListener("click", validarCadastro);

