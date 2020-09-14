const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');

addNewItem.addEventListener('click', insertItem)

function insertItem(textItem) {
  const newItem = document.createElement('li')
  textItem = textInput.value
  newItem.innerText = textItem;
  list.appendChild(newItem);
}