//  variáveis
const createTaskBttn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

//  adicionar elemento à lista
createTaskBttn.addEventListener ('click', function() {
  const newTask = document.createElement('li');
  newTask.innerHTML = taskInput.value;
  list.appendChild(newTask);
  taskInput.value = '';
});