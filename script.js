const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const todos = document.getElementsByTagName('li');

function changeBackgroundColor() {
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].addEventListener('click', () => {
      todos[i].className = 'selected';
    });
  }
}

function completeTasks() {
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].addEventListener('dblclick', () => {
      if(todos[i].className === 'completed') {
        todos[i].className = '';
      } else {
        todos[i].className = 'completed';
      }
    });
  }
}

function insertItem(textItem) {
  const newItem = document.createElement('li');
  textItem = textInput.value;
  newItem.innerHTML = textItem;
  list.appendChild(newItem);
  textInput.value = '';
  changeBackgroundColor();
  completeTasks();
}

addNewItem.addEventListener('click', insertItem);

