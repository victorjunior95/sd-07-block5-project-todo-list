// Add task event
let addTask = document.querySelector('#criar-tarefa'); // Button add task

// Select item with click
function selectItem(event) {
  let previousSelectedTask = document.querySelector('.selected');
  // check if any items are selected
  
  if (previousSelectedTask !== null) {
    previousSelectedTask.className = previousSelectedTask.className.replace('selected', '');
  }

  if (event.target.className.includes('completed')) {
    event.target.className = 'selected completed';
  }
  else {
    event.target.className = 'selected';
  }
  
}

// Task completed
function taskCompleted(event) {
  if (event.target.className.includes('completed')) {
    event.target.className = event.target.className.replace(' completed', '')
  }
  else {
    event.target.className += ' completed'
  }
  
}

addTask.addEventListener('click', function () {
  let tasks = document.querySelector('#lista-tarefas'); // List of all tasks to do
  let taskToDo = document.querySelector('#texto-tarefa'); // Input with the new task

  let taskItem = document.createElement('li');
  taskItem.addEventListener('click', selectItem);
  taskItem.addEventListener('dblclick', taskCompleted);
  taskItem.innerText = taskToDo.value;
  taskToDo.value = '';

  tasks.appendChild(taskItem); // add task to list
});
