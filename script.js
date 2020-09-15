const makeTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedlist = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');

function makeTaskList() {
  const ul = document.createElement('li');
  ul.className = 'task-item';
  ul.innerText = inputTask.value;
  orderedlist.appendChild(ul);
  inputTask.value = '';
}
function eraseAll() {
  while (orderedlist.firstChild) {
    orderedlist.removeChild(orderedlist.firstChild);
    }
}
makeTask.addEventListener('click', makeTaskList);
eraseAllButton.addEventListener('click', eraseAll);
