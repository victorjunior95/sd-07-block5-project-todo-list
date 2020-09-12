const inputText = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('cria-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearDone = document.getElementById('remover-finalizados');

function addTask() {
  if (inputText.value === '') return alert('Digite o texto antes de adicionar à lista!');

  const li = document.createElement('li');
  li.textContent = inputText.value;
  taskList.appendChild(li);
  inputText.value = '';
}

buttonAddTask.addEventListener('click', addTask);
