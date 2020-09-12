const inputTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

buttonAddTask.addEventListener('click',addTask);
buttonAddTask.addEventListener('dblclick',doneListItem);

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
    // add event select - one click
    listItem.addEventListener('click', selectListItem);
    // add event select - double click
    listItem.addEventListener('dblclick', doneListItem);
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
  // remove class item selected from item
  for (let index = 0; index < allListItem.length; index += 1) {
    removeClassName(allListItem[index], ' item-selected');
  }
}

// function to select one list item
function selectListItem(event) {
  // unselect all list items
  unselectAll();
  // select list item target
  addClassName(event.target,' item-selected');
}

// function to add a class name to a element
function addClassName(element, className) {
  element.className += className;
}

// function to remove a class name from a element
function removeClassName(element, className) {
  const currentClassName = element.className.replace(className,'');
  element.className = currentClassName;
}

// function done a list item
function doneListItem(event) {
  // mark/check list item target
  addClassName(event.target,' completed');
}

// function to listen clicks
/* function clickItem(event) {
  switch (event.detail) {
    case 2: // two clicks - double click
      addClassName(event.target,' completed');
      break;
    default: // one click
      selectListItem(event);
  }
} */