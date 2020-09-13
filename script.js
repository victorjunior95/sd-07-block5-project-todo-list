const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonAddTask = document.getElementById('criar-tarefa');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonClearSelection = document.getElementById('limpar-selecao');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearDone = document.getElementById('remover-finalizados');

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

function addTask() {
  if (inputText.value === '') {
    alert('Digite o texto antes de adicionar à lista!');
  } else {
    const li = document.createElement('li');
    li.textContent = inputText.value;
    li.addEventListener('click', selectItem);
    li.addEventListener('dblclick', markItem);
    taskList.appendChild(li);
    inputText.value = '';
    inputText.focus();
  }
}

function clearAll() {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((element) => taskList.removeChild(element));
}

function clearDone() {
  const listItems = document.querySelectorAll('.completed');

  listItems.forEach((element) => taskList.removeChild(element));
}

function save() {
  localStorage.setItem('task_list', taskList.innerHTML);
}

function moveUp() {

}

function moveDown() {

}

function removeSelected() {
  for (const element of document.querySelectorAll('li')) {
    if (element.classList[0] === 'selected' || element.classList[1] === 'selected')
      taskList.removeChild(element);
  }
}

function removeDone() {
  for (const element of document.querySelectorAll('li')) {
    if (element.classList[0] === 'completed' || element.classList[1] === 'completed')
      taskList.removeChild(element);
  }
}

function removeSelection() {
  for (const element of document.querySelectorAll('li')) {
    if (element.classList[0] === 'selected' || element.classList[1] === 'selected')
      element.classList.toggle('selected');
  }
}

function getList() {
  taskList.innerHTML = localStorage.getItem('task_list');

  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', selectItem);
    element.addEventListener('dblclick', markItem);
  });
}

buttonAddTask.addEventListener('click', addTask);
buttonClearAll.addEventListener('click', clearAll);
buttonClearDone.addEventListener('click', clearDone);
buttonSave.addEventListener('click', save);
buttonMoveUp.addEventListener('click', moveUp);
buttonMoveDown.addEventListener('click', moveDown);
buttonRemoveSelected.addEventListener('click', removeSelected);
buttonClearSelection.addEventListener('click', removeSelection);

getList();