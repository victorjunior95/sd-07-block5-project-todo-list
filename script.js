// Função para adicionar e tratar eventos
function adicionaEvento(novoItem) {
  novoItem.addEventListener('click', function () {
    const itensLista = document.getElementById('lista-tarefas').children;
    for (let index = 0; index < itensLista.length; index += 1) {
      itensLista[index].classList.remove('selected');
    }
    novoItem.classList.add('selected');
  });
  novoItem.addEventListener('dblclick', function () {
    novoItem.classList.remove('selected');
    if (novoItem.className === 'completed') {
      novoItem.classList.remove('completed');
    } else {
      novoItem.classList.add('completed');
    }
  });
}
// Função para inserir tarefa
const botaoAddTarefa = document.getElementById('criar-tarefa');
botaoAddTarefa.addEventListener('click', function () {
  const tarefa = document.getElementById('texto-tarefa').value;
  const novoItem = document.createElement('li');
  const itemTarefa = document.getElementById('lista-tarefas');
  itemTarefa.appendChild(novoItem).innerHTML = tarefa;
  document.getElementById('texto-tarefa').value = '';
  adicionaEvento(novoItem);
});
// Função para remover todos os itens da lista
const botaoLimpaLista = document.getElementById('apaga-tudo');
botaoLimpaLista.addEventListener('click', function () {
  const itemTarefa = document.getElementById('lista-tarefas');
  while (itemTarefa.firstChild) {
    itemTarefa.removeChild(itemTarefa.firstChild);
  }
});
// Função para remover finalizados
const removeCompleto = document.getElementById('remover-finalizados');
removeCompleto.addEventListener('click', function () {
  for (let index = 0; index < document.getElementById('lista-tarefas').children.length; index += 1) {
    let item = document.getElementById('lista-tarefas').children[index].className;
    while (item === 'completed') {
      document.querySelector('.completed').remove(item[index]);
    }
  }
});
