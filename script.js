const makeTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedlist = document.querySelector('#lista-tarefas');

function makeTaskList() {
  const ul = document.createElement('ul');
  ul.className = 'task-item';
  ul.innerText = inputTask.value;
  orderedlist.appendChild(ul);
  inputTask.value = '';
}
makeTask.addEventListener('click', makeTaskList);
