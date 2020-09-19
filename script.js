let buttonCriarTarefa = document.querySelector("#criar-tarefa");
let inputTarefa = document.querySelector("#texto-tarefa");
let listaTarefas = document.querySelector("#lista-tarefas");

buttonCriarTarefa.addEventListener("click", function () {
  let tarefaLista = document.createElement("li");
  listaTarefas.appendChild(tarefaLista);
  tarefaLista.innerText = inputTarefa.value;
});
