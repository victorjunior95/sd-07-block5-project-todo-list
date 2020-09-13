const inputText = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('cria-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearDone = document.getElementById('remover-finalizados');

function addTask() {
  if (inputText.value === '') {
    return alert('Digite o texto antes de adicionar à lista!');
  }
  const li = document.createElement('li');
  li.textContent = inputText.value;
  li.addEventListener('click', selectItem);
  li.addEventListener('dblclick', markItem);
  taskList.appendChild(li);
  inputText.value = '';
  inputText.focus();
}

function selectItem(event) {
  for (const element of document.getElementsByTagName('li')) {
    if (element.classList[0] === 'selected') {
      element.classList.toggle('selected');
    } else if (element.classList[1] === 'selected') {
      element.classList.toggle('selected');
    }
  }
  event.target.classList.toggle('selected');
}

function markItem(event) {
  event.target.classList.toggle('completed');
}

buttonAddTask.addEventListener('click', addTask);
