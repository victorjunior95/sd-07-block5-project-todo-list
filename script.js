// destaca item da lista selecionado com background rgb(128,128,128)
function selectedItenList() {
  this.style.backgroundColor = 'rgb(128 , 128 , 128)';
}

// adiciona tarefa à lista ordenada conforme texto digitado
function adicionarTarefa(element, textInput) {
  const listaTarefa = document.createElement('li');
  listaTarefa.innerText = textInput;
  listaTarefa.addEventListener('click', selectedItenList);
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
};
