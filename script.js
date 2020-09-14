//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let liTask = document.getElementsByClassName('task');
let selectedItem = document.getElementsByClassName('selected');

//  Functions
function selectLi() {
  if (selectedItem[0] !== undefined) {
    selectedItem[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function unselectLi() {
  selectedItem = document.getElementsByClassName('selected');
  if (selectedItem[0] === event.target) {
    selectedItem[0].classList.remove('selected');
  } else {
    selectLi();
  }
}

function markAsDoneLi() {
  console.log('markAsDone');
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
