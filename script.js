//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let liTask = document.querySelectorAll('#lista-tarefas li');

//  Functions
function elementCreator() {
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  return element;
}

function addTaskToList() {
  orderedListTasks.appendChild(elementCreator());
}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);

//  Última linha
