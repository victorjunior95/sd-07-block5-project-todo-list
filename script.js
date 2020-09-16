const makeTaskButton = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const eraseAllButton = document.querySelector('#apaga-tudo');

function makeTaskList() {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerText = inputTask.value;
  orderedList.appendChild(li);
  inputTask.value = '';

  const classLi = document.querySelector('#lista-tarefas').children;
  function setCor() {
    sel.style.background = 'rgb(128, 128, 128)';
    }
  for (let i = 0; i < classLi.length; i += 1) {
      const sel = classLi[i];
  sel.addEventListener('click', setCor);
    }

}

function eraseAll() {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}

makeTaskButton.addEventListener('click', makeTaskList);
eraseAllButton.addEventListener('click', eraseAll);
