const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

buttonCriarTarefa.addEventListener('click', function () {
  const tarefaLista = document.createElement('li');
  tarefaLista.setAttribute('id', 'tarefa-salva');
  tarefaLista.innerText = inputTarefa.value;
  listaTarefas.appendChild(tarefaLista);
  inputTarefa.value = '';
  inputTarefa.focus();
});

listaTarefas.addEventListener('click', function (event) {
  if (event.target.tagName === 'li') {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').style.backgroundColor = 'white';
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }

});

listaTarefas.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
