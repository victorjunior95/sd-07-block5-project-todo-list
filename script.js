const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
});
