let tarefas = [];

const tarefa = document.querySelector("#tarefa");
const adicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#listaTarefas");

function listarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach((nomeTarefa) => {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const remover = document.createElement("button");

        checkbox.type = "checkbox";
        label.textContent = nomeTarefa;
        remover.textContent = "Remover";
        item.dataset.tarefa = nomeTarefa;
        
        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(remover);
        listaTarefas.appendChild(item);
        
        checkbox.addEventListener("change", (event) => {
          const itemTarefa = event.target.parentElement;
          
          if (event.target.checked) {
            itemTarefa.classList.add("concluida");
          } else {
            itemTarefa.classList.remove("concluida");
          }
        });
        
    });
}


adicionar.addEventListener("click", () => {
  const valorTarefa = tarefa.value.trim();
  
  if (valorTarefa) {
    tarefas.push(valorTarefa);
    
    tarefa.value = "";
    
    listarTarefas();
  }
});

listaTarefas.addEventListener("click", (evento) => {
    if(evento.target.textContent === "Remover") {

        const item = evento.target.parentElement;
        const nomeTarefa = item.dataset.tarefa;

        const atualizadas = tarefas.filter((tarefa) => {
          return tarefa !== nomeTarefa;
        });

        tarefas = atualizadas;

        listarTarefas();
    }
});
