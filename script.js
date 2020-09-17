const task = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const taskAdd = document.getElementById('criar-tarefa');

taskAdd.addEventListener('click', function () {
  const currentTask = document.createElement('li');
  currentTask.className = 'ordered-list';
  currentTask.innerText = task.value;
  list.appendChild(currentTask);
  task.value = '';
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('ordered-list')) {
    const selectedAllTasks = document.getElementsByClassName('ordered-list');
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
