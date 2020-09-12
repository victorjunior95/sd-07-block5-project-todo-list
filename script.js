const inputTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

buttonAddTask.addEventListener('click',addTask);

// function check input
function checkInput(inputElement) {
  if (inputElement.value === '') {
    alert('É necessário informar uma tarefa.');
    return false;
  } else {
    return true;
  }
}

// function add task
function addTask() {
  // check input is not empty
  if (checkInput(inputTask)) {
    // create a list item
    const listItem = document.createElement('li');
    // get text from input
    listItem.innerText = inputTask.value;
    // append item at the list
    taskList.appendChild(listItem);
    // clear input text
    inputTask.value = '';
  } 
}