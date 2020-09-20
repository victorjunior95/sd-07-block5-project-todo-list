const buttonCriarTarefa = document.querySelector("#criar-tarefa");
const inputTarefa = document.querySelector("#texto-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

buttonCriarTarefa.addEventListener("click", function () {
  const tarefaLista = document.createElement("li");
  tarefaLista.innerText = inputTarefa.value;
  listaTarefas.appendChild(tarefaLista);
  inputTarefa.value = "";
});
