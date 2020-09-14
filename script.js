function criarTarefa() {
  const textoTarefa = document.querySelector('#texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');

  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  textoTarefa.value = "";
  listaTarefas.appendChild(novaTarefa);
}
window.onload = function () {
  const criarTarefaButton = document.querySelector("#criar-tarefa");

  criarTarefaButton.addEventListener('click', criarTarefa);
};
