const btnCreateTask = document.getElementById('criar-tarefa');
const btnSaveList = document.getElementById('salvar-tarefas');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemoveCompletedTasks = document.getElementById('remover-finalizados');
const taskTextInput = document.getElementById('texto-tarefa');

function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = taskTextInput.value;
  newTask.className = 'task-item';
  taskList.appendChild(newTask);
  taskTextInput.value = '';
}

function listIsTrue() {
  return !!document.getElementsByClassName('task-item')[0];
}

function taskItemsList() {
  return document.getElementsByClassName('task-item');
}

function saveList() {
  const taskList = document.getElementById('lista-tarefas');
  if (listIsTrue()) {
    localStorage.setItem('listItems', taskList.innerHTML);
  } else {
    alert('Lista vazia!');
  }
}

function getList() {
  const taskList = document.getElementById('lista-tarefas');
  if (localStorage.length > 0) {
    const listItems = localStorage.getItem('listItems');
    taskList.innerHTML = listItems;
  }
}

function clearList() {
  const taskList = document.getElementById('lista-tarefas');
  if (listIsTrue()) {
    localStorage.clear();
    taskList.innerHTML = '';
  }
}

function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  if (listIsTrue()) {
    for (let task = 0; task <= completedTasks.length - 1; task += 1) {
      completedTasks[task].remove();
    }
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-item')) {
    for (
      let taskItem = 0;
      taskItem <= taskItemsList().length - 1;
      taskItem += 1
    ) {
      taskItemsList()[taskItem].style = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task-item')) {
    event.target.classList.toggle('completed');
  }
});

btnCreateTask.addEventListener('click', createTask);
taskTextInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnCreateTask.click();
  }
});

btnClearList.addEventListener('click', clearList);
btnSaveList.addEventListener('click', saveList);
btnRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
getList();
