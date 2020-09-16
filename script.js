const input = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTaskListItem = document.querySelector('#remover-finalizados');
let taskListItens = document.querySelectorAll('li');
let completedTaskListItens = document.querySelectorAll('.completed');
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

selectedTaskListItens();

buttonClearCompletedTaskListItem.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < completedTaskListItens.length; index += 1) {
    taskList.removeChild(completedTaskListItens[index]);
  }
});

function completedTaskListItem() {
  for (let index = 0; index < taskListItens.length; index += 1) {
    taskListItens[index].addEventListener('dblclick', function () {
      taskListItens[index].classList.add('completed');
      completedTaskListItens = document.querySelectorAll('.completed');
    });
  }
}

completedTaskListItem();

function createListItem() {
  let newTaskListItem = document.createElement('li');
  newTaskListItem.innerText = inputValue;
  taskList.appendChild(newTaskListItem);
  input.value = '';
  taskListItens = document.querySelectorAll('li');
  selectedTaskListItens();
  completedTaskListItem();
}

buttonCreateTask.addEventListener('click', function (event) {
  event.preventDefault();
  if (inputValue === '') {
    alert('Campo vazio!');
  } else {
    createListItem();
  }
});

buttonClearList.addEventListener('click', function (event) {
  event.preventDefault();
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});
