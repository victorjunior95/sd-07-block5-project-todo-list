const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');

function insertItem(textItem) {
  const newItem = document.createElement('li');
  textItem = textInput.value;
  newItem.innerHTML = textItem;
  list.appendChild(newItem);
  textInput.value = '';
  const todos = document.getElementsByTagName('li');
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].addEventListener('click', () => {
      todos[i].className = 'selected';
    });
  }
}

addNewItem.addEventListener('click', insertItem);

