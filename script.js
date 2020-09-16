const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', addTask);

document.querySelectorAll('li').forEach((item) => {
  document.querySelectorAll('li')[item].addEventListener('click', changeItemBackground);
});

function addTask() {
  const addedItem = document.createElement('li');
  addedItem.innerText = inputText.value;
  taskList.appendChild(addedItem);
  inputText.value = '';
}

function changeItemBackground() {
event.
}