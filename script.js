// Add task event
let addTask = document.querySelector('#criar-tarefa'); // Button add task

// Event to select item with click
function selectItem(event){
  let previousSelectedTask = document.querySelector('.selected')
  // check if any items are selected
  if (previousSelectedTask !== null) {
    previousSelectedTask.className = ''
  }
  event.target.className = 'selected'
}

addTask.addEventListener('click', function () {
  let tasks = document.querySelector('#lista-tarefas'); // List of all tasks to do
  let taskToDo = document.querySelector('#texto-tarefa'); // Input with the new task

  let taskItem = document.createElement('li');
  taskItem.addEventListener('click', selectItem)
  taskItem.innerText = taskToDo.value;
  taskToDo.value = '';

  tasks.appendChild(taskItem); // add task to list
});
