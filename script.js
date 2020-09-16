const task = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const taskAdd = document.getElementById('criar-tarefa');

taskAdd.addEventListener('click', function () {
  let currentTask = document.createElement('li');
  currentTask.innerText = task.value;
  list.appendChild(currentTask); 
});