const input = document.querySelector('#texto-tarefa');
const buttonCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTaskListItem = document.querySelector('#remover-finalizados');
let taskListItens = document.querySelectorAll('li');
let completedTaskListItens = document.querySelectorAll('.completed');
let inputValue = '';

function uncheckedTaskListItem(position) {
  for (let index = 0; index < taskListItens.length; index += 1) {
    if (taskListItens[index] !== position) {
      taskListItens[index].classList.remove('selected');
    }
  }
}

buttonClearCompletedTaskListItem.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 0; index < completedTaskListItens.length; index += 1) {
    taskList.removeChild(completedTaskListItens[index]);
  }
});

buttonClearList.addEventListener('click', function (event) {
  event.preventDefault();
  taskList.innerText = '';
});

function createListItem() {
  let newTaskListItem = document.createElement('li');
  newTaskListItem.innerText = inputValue;
  taskList.appendChild(newTaskListItem);
  input.value = '';
  taskListItens = document.querySelectorAll('li');

  newTaskListItem.addEventListener('click', function (event) {
    newTaskListItem.classList.add('selected');
    let position = event.target
    uncheckedTaskListItem(position);
  });

  newTaskListItem.addEventListener('dblclick', function () {
    newTaskListItem.classList.add('completed');
    completedTaskListItens = document.querySelectorAll('.completed');
    uncheckedCompletedTaskListItem(completedTaskListItens);
  });
}

buttonCreateTask.addEventListener('click', function (event) {
  event.preventDefault();
  if (inputValue === '') {
    alert('Campo vazio!');
  } else {
    createListItem();
  }
});

input.addEventListener('keyup', function () {
  inputValue = input.value;
});
