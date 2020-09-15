// destaca item da lista selecionado com background rgb(128,128,128)
function selectedItemList() {
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].removeAttribute('style');
  }
  this.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

// marcação de itens completos
function completedItemList() {
  if (this.hasAttribute('class')) {
    this.removeAttribute('class')
  } else this.className = 'completed';
}

// apagar todas as tarefas da lista
function apagaTarefas() {
  const tarefas = document.getElementsByTagName('li');
  while (tarefas.length > 0) {
    tarefas[0].remove();
  }
}

// adiciona tarefa à lista ordenada conforme texto digitado
function adicionarTarefa(element, textInput) {
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput;
  listaTarefa.addEventListener('click', selectedItemList);
  listaTarefa.addEventListener('dblclick', completedItemList);
  element.insertAdjacentElement('beforeend', listaTarefa);
}

window.onload = function () {
  // adicionar tarefa
  const criarTarefaButton = document.querySelector('#criar-tarefa');
  const textoTarefaInput = document.querySelector('#texto-tarefa');
  const listaTarefasOl = document.querySelector('#lista-tarefas');
  criarTarefaButton.addEventListener('click', function () {
    adicionarTarefa(listaTarefasOl, textoTarefaInput.value);
    textoTarefaInput.value = '';
  });

  // limpar lista de tarefas
  const apagaTudoButton = document.querySelector('#apaga-tudo');
  apagaTudoButton.addEventListener('click', apagaTarefas)
};
