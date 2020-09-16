const input = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearList = document.querySelector('#apaga-tudo');
let taskListItens = document.querySelectorAll('li');
let inputValue = '';

input.addEventListener('keyup', function () {
  inputValue = input.value;
});

function uncheckedTaskListItem(selectedPosition) {
  for (let index = 0; index < taskListItens.length; index += 1) {
    if (index !== selectedPosition) {
      taskListItens[index].classList.remove('selected');
    }
  }
}

function selectedTaskListItens() {
  for (let index = 0; index < taskListItens.length; index += 1) {
    taskListItens[index].addEventListener('click', function () {
      taskListItens[index].classList.add('selected');
      uncheckedTaskListItem(index);
    });
  }
}

function completedTaskListItem() {
  for (let index = 0; index < taskListItens.length; index += 1) {
    taskListItens[index].addEventListener('dblclick', function () {
      taskListItens[index].classList.add('completed');
    });
  }
}

function createListItem() {
  let newTaskListItem = document.createElement('li');
  newTaskListItem.innerText = inputValue;
  taskList.appendChild(newTaskListItem);
  input.value = '';
  taskListItens = document.querySelectorAll('li');
  selectedTaskListItens();
  completedTaskListItem();
}

createTask.addEventListener('click', function (event) {
  event.preventDefault();
  if (inputValue === '') {
    alert('Campo vazio!');
  } else {
    createListItem();
  }
});

clearList.addEventListener('click', function (event) {
  event.preventDefault();
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});
