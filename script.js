const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', addTask);

function addTask() {
  const addedItem = document.createElement('li');
  addedItem.innerText = inputText.value;
  addedItem.addEventListener('click', function () {
    addedItem.style.backgroundColor = 'rgb(128,128,128)'
  });
  taskList.appendChild(addedItem);
  inputText.value = '';
}
