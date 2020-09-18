// Função para inserir tarefa
const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
});
// Função para remover todos os itens da lista
const botaoLimpaLista = document.getElementById('apaga-tudo');
botaoLimpaLista.addEventListener('click', function () {
  const itemTarefa = document.getElementById('lista-tarefas');
  while (itemTarefa.firstChild) {
    itemTarefa.removeChild(itemTarefa.firstChild);
  }
});
