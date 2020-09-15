// Select item with click
function selectItem(event) {
  let previousSelectedTask = document.querySelector('.selected');
  // check if any items are selected

  if (previousSelectedTask !== null) {
    previousSelectedTask.className = previousSelectedTask.className.replace('selected', '');
  }

  if (event.target.className.includes('completed')) {
    event.target.className = 'selected completed';
  } else {
    event.target.className = 'selected';
  }

}

// Mark task completed
function taskCompleted(event) {
  if (event.target.className.includes('completed')) {
    event.target.className = event.target.className.replace(' completed', '');
  } else {
    event.target.className += ' completed';
  }

}

// Add task event
let addTask = document.querySelector('#criar-tarefa'); // Button add task

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

// Clear list
let clearAll = document.querySelector('#apaga-tudo');

clearAll.addEventListener('click', function () {
  document.querySelector('#lista-tarefas').innerHTML = '';
});

// Clear all completed tasks
let clearAllCompleted = document.querySelector('#remover-finalizados');
clearAllCompleted.addEventListener('click', function () {
  let tasksCompleteds = document.querySelectorAll('#lista-tarefas .completed')
  for (let index = 0; index < tasksCompleteds.length; index += 1){
    tasksCompleteds[index].remove();
  }
});

// Save tasks
let saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', function () {
  localStorage.clear()
  let tasksToSave = document.querySelectorAll('#lista-tarefas li')
  for (let item = 0; item < tasksToSave.length; item += 1) {
    localStorage.setItem(`Item-${item}`, tasksToSave[item])
  }
})

window.onload = function () {
  console.log(localStorage['Item-0'])
}
