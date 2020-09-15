const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', addTask);

function addTask() {
  const addedItem = document.createElement('li');
  addedItem.innerText = inputText.value;
  taskList.appendChild(addedItem);
  inputText.value = '';
}