const list = document.getElementById('lista-tarefas');
const addNewItem = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const deleteAll = document.getElementById('apaga-tudo');
const deleteConcludedTasks = document.getElementById('remover-finalizados');
const elements = [];

function changeBackgroundColor(element) {
  element.addEventListener('click', () => {
    if (!element.className) {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('selected');
      }
      element.classList.add('selected');
    }
  });
}

function completeTasks(element) {
  element.addEventListener('dblclick', () => {
    element.classList.toggle('completed');
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
deleteAll.addEventListener('click', () => {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].remove();
  }
});

deleteConcludedTasks.addEventListener('click', () => {
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].className === 'completed') {
      elements[i].remove();
    }
  }
});
