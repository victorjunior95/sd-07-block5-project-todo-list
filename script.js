criarTarefaButton = document.querySelector('#criar-tarefa');
listaDeTarefas = document.querySelector('#lista-tarefas');
tarefaInput = document.querySelector('#texto-tarefa');

criarTarefaButton.addEventListener('click', function () {
  listaDeTarefas.innerHTML += listaDeTarefas.innerHTML = `<li>${tarefaInput.value}</li>`;
  tarefaInput.value = '';
});
