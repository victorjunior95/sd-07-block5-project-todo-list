const btnCreateTask = document.getElementById('criar-tarefa');
const btnClearList = document.getElementById('apaga-tudo');
const btnRemoveCompletedTasks = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');
const taskTextInput = document.getElementById('texto-tarefa');
function createTask() {
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

function clearList() {
  if (listIsTrue()) {
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
btnRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
