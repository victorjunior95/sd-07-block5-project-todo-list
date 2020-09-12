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
    // add event select
    listItem.addEventListener('click', selectListItem);
    // append item at the list
    taskList.appendChild(listItem);
    // clear input text
    inputTask.value = '';
  } 
}

// function to unselect all list item
function unselectAll() {
  // get all list item
  const allListItem = document.querySelectorAll('li');
  // change class name to empty
  for (let index = 0; index < allListItem.length; index += 1) {
    allListItem[index].className = '';
  }
}

// function to select one list item
function selectListItem(event) {
  // unselect all list items
  unselectAll();
  // select list item target
  event.target.className = 'item-selected';
}