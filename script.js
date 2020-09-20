const task = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const taskAdd = document.getElementById('criar-tarefa');
let selectedAllTasks = [];

taskAdd.addEventListener('click', function () {
  const currentTask = document.createElement('li');
  currentTask.className = 'ordered-list';
  currentTask.innerText = task.value;
  list.appendChild(currentTask);
  task.value = '';
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('ordered-list')) {
    selectedAllTasks = document.getElementsByClassName('ordered-list');
    for (let index = 0; index < selectedAllTasks.length; index += 1) {
      selectedAllTasks[index].classList.remove('selected');
    }
    const selectedTask = event.target;
    selectedTask.classList.add('selected');
  }
});

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('ordered-list')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

const cleanButton = document.querySelector('#apaga-tudo');

cleanButton.addEventListener('click', function () {
  for (let index = 0; list.childElementCount !== 0; index += 1) {
    list.removeChild(list.children[0]);
  }
});

const finishedRemove = document.querySelector('#remover-finalizados');

finishedRemove.addEventListener('click', function () {
  for (let index = (list.childElementCount - 1); index >= 0; index -= 1) {
    if (list.children[index].classList.contains('completed')) {
      list.removeChild(list.children[index]);
    }
  }
});

const tasksSave = document.querySelector('#salvar-tarefas');
const tasksArray = [];

tasksSave.addEventListener('click', function () {
  for (let index = 0; index < list.children.length; index += 1) {
    tasksArray.push(list.children[index].innerText);
  }
  localStorage.setItem('List_tasks', JSON.stringify(tasksArray));
});
