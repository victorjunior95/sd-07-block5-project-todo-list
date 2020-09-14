//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompletedTasks = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonLoadTasks = document.getElementById('carregar-tarefas');
const buttonMoveUp = document.getElementById('mover-acima');
const buttonMoveDown = document.getElementById('mover-abaixo');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let selectedTask = document.getElementsByClassName('selected');
let completedTasks = document.querySelectorAll('.completed');

//  Functions
function selectOtherLi() {
  if (selectedTask[0] !== undefined) {
    selectedTask[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function unselectLi() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] === event.target) {
    selectedTask[0].classList.remove('selected');
  } else {
    selectOtherLi();
  }
}

function markAsDoneLi() {
  if (event.target.className !== 'task completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function elementCreator() {
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  element.className = 'task';
  inputTextTask.value = '';
  element.addEventListener('click', unselectLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

function addTaskToList(textLoad) {
  const elementLi = elementCreator();
  if (textLoad !== event) {
    elementLi.innerText = textLoad;
  }
  orderedListTasks.appendChild(elementLi);
}

function clearTaskList() {
  orderedListTasks.innerHTML = '';
}

function removeCompletedTasks() {
  completedTasks = document.getElementsByClassName('completed');
  const numberMax = completedTasks.length;
  for (let index = 0; index < numberMax; index += 1) {
    completedTasks[0].parentElement.removeChild(completedTasks[0]);
  }
}

function removeSelectedTask() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] !== undefined) {
    orderedListTasks.removeChild(selectedTask[0]);
  }
}

function saveOrderedList() {
  const toString = JSON.stringify(orderedListTasks.innerHTML);
  localStorage.setItem('keyListTask', toString);
}

function loadOrderedList() {
  const toHtml = JSON.parse(localStorage.getItem('keyListTask'));
  orderedListTasks.innerHTML = toHtml;
  const tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', unselectLi);
    tasks[index].addEventListener('dblclick', markAsDoneLi);
  }
}

function moveTaskUp() {

}

function moveTaskDown() {

}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);
buttonClearTaskList.addEventListener('click', clearTaskList);
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
buttonRemoveSelected.addEventListener('click', removeSelectedTask);
buttonSaveTasks.addEventListener('click', saveOrderedList);
buttonLoadTasks.addEventListener('click', loadOrderedList);
buttonMoveUp.addEventListener('click', moveTaskUp);
buttonMoveDown.addEventListener('click', moveTaskDown);

//  Initializing Scripts
if (localStorage.length !== 0) {
  window.onload = loadOrderedList;
}
