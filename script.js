const inputTask = document.getElementById('texto-tarefa');
const buttonAddTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonRemoveAll= document.getElementById('apaga-tudo');
const buttonRemoveDone= document.getElementById('remover-finalizados');
const buttonSaveTaskList= document.getElementById('salvar-tarefas');

buttonAddTask.addEventListener('click',clickAddTask);
buttonRemoveAll.addEventListener('click',removeAll);
buttonRemoveDone.addEventListener('click',removeAllDone);
buttonSaveTaskList.addEventListener('click',saveTaskList);

// function check input
function checkInput(inputElement) {
  if (inputElement.value === '') {
    alert('É necessário informar uma tarefa.');
    return false;
  } else {
    return true;
  }
}

// function to clickAddTask
function clickAddTask() {
  addTask(inputTask.value,false);
}

// function add task
function addTask(taskName, completed) {
  // check input is not empty
  if (checkInput(taskName)) {
    // create a list item
    const listItem = document.createElement('li');
    // fill text from parameter
    listItem.innerText = taskName;
    // check if task is done
    if (completed) {
      addClassName(listItem,' completed');
    }
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

// function to remove all list item
function removeAll() {
  taskList.innerHTML = '';
}

// function to remove all list item done
function removeAllDone() {
  // get all list items done
  const listItemsDone = document.querySelectorAll('.completed');
  // remove each one
  for (let index = 0; index < listItemsDone.length; index += 1) {
    //remove item
    taskList.removeChild(listItemsDone[index]);
  }
}

// fucntion to save task list
function saveTaskList() {
  const itemsList = [];
  // get all list items
  const allListItem = document.querySelectorAll('li');
  // for each item at task list
  for (let index = 0; index < allListItem.length; index += 1) {
    // get task text
    const task = allListItem[index].innerText;
    // get task completed
    let completed = false;
    if (allListItem[index].className.indexOf('completed') >= 0) {
      completed = true;
    }
    // create the item list
    const itemList = {
      task: task,
      completed: completed
    };
    // push item list on list
    itemsList.push(itemList);
  }
  // save item list like tasklist
  localStorage.setItem('taskList', JSON.stringify(itemsList));
}

// function to load the tasklist
function loadTaskList() {
  let itemsList = [];
  // get the tasklist on storage
  itemsList = JSON.parse(localStorage.getItem("taskList"));
  // for each item at itemsList
  for (let index = 0; index < itemsList.length; index += 1) {
    addTask(itemsList[index].task, itemsList[index].completed);
  }
}

// load list from storage
loadTaskList();