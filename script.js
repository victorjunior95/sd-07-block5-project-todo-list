const makeTaskButton = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');
/* eslint no-restricted-syntax: ["error", "FunctionExpression",
 "WithStatement", "BinaryExpression[operator='in']"] */

function setColorBackgroundLi() {
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
  li.addEventListener('click', setColorBackgroundLi);

  function setlinethrough() {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  }
  li.addEventListener('dblclick', setlinethrough);
}

function eraseAll() {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}

makeTaskButton.addEventListener('click', makeTaskList);
eraseAllButton.addEventListener('click', eraseAll);
