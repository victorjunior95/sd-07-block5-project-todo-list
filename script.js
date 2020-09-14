//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let liTask = document.getElementsByClassName('task');
let selectedTask = document.getElementsByClassName('selected');
let completedTasks = document.getElementsByClassName('completed')

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
  element.className = 'task'
  inputTextTask.value = '';
  element.addEventListener('click', unselectLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

function addTaskToList() {
  orderedListTasks.appendChild(elementCreator());
}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);
