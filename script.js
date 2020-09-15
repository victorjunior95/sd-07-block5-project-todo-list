const btnCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskTextInput = document.getElementById('texto-tarefa');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = taskTextInput.value;
  taskList.appendChild(newTask);
  taskTextInput.value = '';
}

btnCreateTask.addEventListener('click', createTask);
