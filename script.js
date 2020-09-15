// Add task event
let addTask = document.querySelector('#criar-tarefa'); // Button add task


addTask.addEventListener('click', function () {
  let tasks = document.querySelector('#lista-tarefas'); // List of all tasks to do
  let taskToDo = document.querySelector('#texto-tarefa'); // Input with the new task

  let taskItem = document.createElement('li');
  taskItem.innerText = taskToDo.value;
  taskToDo.value = '';

  tasks.appendChild(taskItem);
});

