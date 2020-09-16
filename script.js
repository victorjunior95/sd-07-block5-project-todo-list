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

  // http://devfuria.com.br/javascript/dom-insert-before/ - insertBefore, similar ao appendChild, porém após inserir a variável desejada deve colocar antes de qual child você pretende acrescerntar dessa forma (newTaskListItem, taskListItens[0]) newTaskListItem sendo a variável que será adicionada e taskListItens[0] sendo o filho de taskList que antecederá a variável que será adicionada.

function createListItem() {
  let newTaskListItem = document.createElement('li');
  newTaskListItem.innerText = inputValue;
  taskList.insertBefore(newTaskListItem, taskListItens[0]);
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

buttonClearList.addEventListener('click', function (event) {
  event.preventDefault();
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

input.addEventListener('keyup', function () {
  inputValue = input.value;
});
