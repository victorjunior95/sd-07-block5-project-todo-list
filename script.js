const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');

function insertItem(textItem) {
  const newItem = document.createElement('li');
  textItem = textInput.value;
  newItem.innerText = textItem;
  list.prepend(newItem);
}

addNewItem.addEventListener('click', insertItem);

