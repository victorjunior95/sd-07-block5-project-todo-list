const addButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas')

addButton.addEventListener('click', function () {
  let inputItem = document.getElementById('texto-tarefa');
  createNewTask(inputItem.value);
  inputItem.value = ''
})

function createNewTask(newTask) {
  let listItem = document.createElement('li');
  listItem.innerText = newTask;
  orderedList.appendChild(listItem)
  ;
  addNewTaskListener(listItem)
}

function addNewTaskListener(listItem) {
  listItem.addEventListener('click', function () {
    removeSelectedClassFromPrevious()
    listItem.className = 'selected'
    console.log(listItem)
  })
}

// remove selected class from the task
function removeSelectedClassFromPrevious() {
  let selectedItem = document.querySelectorAll('.selected');
  if (selectedItem.length > 0) {
    selectedItem[0].className = ''
  }
}