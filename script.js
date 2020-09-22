criarTarefaButton = document.querySelector('#criar-tarefa');
removerFinalizadosButton = document.querySelector('#remover-finalizados');
salvarTarefasButton = document.querySelector('#salvar-tarefas');
removerSelecionadosButton = document.querySelector('#remover-selecionado');
apagaTudoButton = document.querySelector('#apaga-tudo');
listaDeTarefas = document.querySelector('#lista-tarefas');
tarefaInput = document.querySelector('#texto-tarefa');

criarTarefaButton.addEventListener('click', function () {
  listaDeTarefas.innerHTML += listaDeTarefas.innerHTML = `<li>${tarefaInput.value}</li>`;
  tarefaInput.value = '';
});

apagaTudoButton.addEventListener('click', function () {
  $('#lista-tarefas').empty();
});
