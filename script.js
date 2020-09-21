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
    event.target.classList.add('selected');
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
  list.innerHTML = '';
});

const finishedRemove = document.querySelector('#remover-finalizados');

finishedRemove.addEventListener('click', function () {
  const item = document.querySelectorAll('.completed');
  for (index = 0; index < item.length; index += 1) {
    item[index].remove();
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

if (typeof (Storage) != "undefined") {
  if(localStorage.length !== 0) {
    const oldList = JSON.parse(localStorage.getItem('List_tasks'));
    console.log(oldList);
    for (let index = 0; index < oldList.length; index += 1) {
      const itemList = document.createElement('li');
      itemList.className = 'ordered-list';
      itemList.innerText = oldList[index];
      list.appendChild(itemList);
    }
  }
}
