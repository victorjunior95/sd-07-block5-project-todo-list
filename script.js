const makeTaskButton = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');
/* eslint no-restricted-syntax: ["error", "FunctionExpression",
 "WithStatement", "BinaryExpression[operator='in']"] */

function setCor() {
  const classLi = document.querySelector('#lista-tarefas').children;
  for (const li of classLi) {
    if (li.classList.contains('selected')) {
      li.classList.remove('selected');
    }
  }
      // this.classList.add('selected');
  this.className += ' selected';
}

function makeTaskList() {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerText = inputTask.value;
  orderedList.appendChild(li);
  inputTask.value = '';
  li.addEventListener('click', setCor);
}

function eraseAll() {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}

makeTaskButton.addEventListener('click', makeTaskList);
eraseAllButton.addEventListener('click', eraseAll);
