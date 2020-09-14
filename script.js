const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const elements = [];

function changeBackgroundColor(element) {
  element.addEventListener('click', () => {
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('selected');
    }
    element.className = 'selected';
  });
}

function completeTasks(element) {
  element.addEventListener('dblclick', () => {
    if (element.className !== 'completed') {
      element.className = 'completed';
    } else if (element.className === 'completed') {
      element.className = '';
    }
  });
}

function insertItem(textItem) {
  const newItem = document.createElement('li');
  textItem = textInput.value;
  newItem.innerHTML = textItem;
  changeBackgroundColor(newItem);
  completeTasks(newItem);
  list.appendChild(newItem);
  textInput.value = '';
  elements.push(newItem);
}

addNewItem.addEventListener('click', insertItem);
