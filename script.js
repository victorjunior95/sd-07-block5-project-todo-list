const btnCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskTextInput = document.getElementById('texto-tarefa');
function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = taskTextInput.value;
  newTask.className = 'task-item';
  taskList.appendChild(newTask);
  taskTextInput.value = '';
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-item')) {
    const taskItems = document.getElementsByClassName('task-item');
    for (let taskItem = 0; taskItem <= taskItems.length - 1; taskItem += 1) {
      taskItems[taskItem].style = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

btnCreateTask.addEventListener('click', createTask);
taskTextInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnCreateTask.click();
  }
});
