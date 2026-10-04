let tarefas = [];

const tarefa = document.querySelector("#tarefa");
const adicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#listaTarefas");
const contador = document.querySelector("#contador");

const filtro = document.querySelector("#filtros");
const todos = document.querySelector("#todos");
const pendentes = document.querySelector("#pendentes");
const concluidas = document.querySelector("#concluidas");

function atualizarContador() {
  const totalTarefas = tarefas.length;
  const tarefasConcluidas = tarefas.filter((tarefa) => 
    tarefa.concluida).length;

  contador.textContent = `Total: ${totalTarefas} | Concluídas: ${tarefasConcluidas}`;
}

function listarTarefas(lista) {
    listaTarefas.innerHTML = "";

    lista.forEach((tarefaAtual) => {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const remover = document.createElement("button");

        checkbox.type = "checkbox";

        if (tarefaAtual.concluida) {
            checkbox.checked = true;
            item.classList.add("concluida");
        }

        label.textContent = tarefaAtual.nome;
        remover.textContent = "Remover";
        item.dataset.tarefa = tarefaAtual.nome;
        
        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(remover);
        listaTarefas.appendChild(item);
        
        checkbox.addEventListener("change", (event) => {
          const itemTarefa = event.target.parentElement;
          
          if (event.target.checked) {
            tarefaAtual.concluida = true;
            
            itemTarefa.classList.add("concluida");

          } else {
            tarefaAtual.concluida = false;
      
            itemTarefa.classList.remove("concluida");
          }

          atualizarContador();
        });
        
    });
}

filtro.addEventListener("click", (event) => {

  let filtroSelecionado = event.target.textContent;

  if (filtroSelecionado === "TODOS") {
    listarTarefas(tarefas);

  } else if (filtroSelecionado === "PENDENTES") {

    const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida);

    listarTarefas(tarefasPendentes);
    
  } else if (filtroSelecionado === "CONCLUÍDAS") {
    
    const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida);

    listarTarefas(tarefasConcluidas);
  }
});

adicionar.addEventListener("click", () => {
  const valorTarefa = tarefa.value.trim();
  
  if (valorTarefa) {
    tarefas.push({
      nome: valorTarefa,
      concluida: false
    });
    
    tarefa.value = "";
    
    listarTarefas(tarefas);
    atualizarContador();
  }
});

listaTarefas.addEventListener("click", (evento) => {
    if(evento.target.textContent === "Remover") {

        const item = evento.target.parentElement;
        const nomeTarefa = item.dataset.tarefa;

        const atualizadas = tarefas.filter((tarefa) => {
          return tarefa.nome !== nomeTarefa;
        });

        tarefas = atualizadas;

        listarTarefas(tarefas);
        atualizarContador();
    }
});
