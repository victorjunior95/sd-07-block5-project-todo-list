const addButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas')
const removeSelectedButton = document.getElementById('remover-selecionado')

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
  completedTask(listItem)
}

function addNewTaskListener(listItem) {
  listItem.addEventListener('click', function () {
    removeSelectedClassFromPrevious()
    console.log(listItem)
    listItem.classList.add('selected')
  })
}

// remove selected class from the task
function removeSelectedClassFromPrevious() {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.classList.remove('selected')
  }
}

function completedTask(listItem) {
  listItem.addEventListener('dblclick', function () {
    if (listItem.classList.contains('completed')){
      listItem.classList.remove('completed');
    } else {
      listItem.classList.add('completed');
      console.log(listItem.className)
    }
  });
}

deleteButton.addEventListener('click', function () {
  let allItem = document.querySelectorAll('li')
  for (let item = 0; item < allItem.length; item += 1) {
    orderedList.removeChild(allItem[item])
  }
})

buttonRemoveCompleted.addEventListener('click', function () {
  let allCompletedTasks = document.querySelectorAll('.completed')
  for (let item = 0; item < allCompletedTasks.length; item += 1) {
    orderedList.removeChild(allCompletedTasks[item])
  }
})

saveButton.addEventListener('click', function (){
  let listItem = document.querySelectorAll('li')
  for (index = 0; index < listItem.length; index += 1) {
    let value = listItem[index].innerText
    localStorage.setItem(`item${index}`, value)
    console.log('oiiiiii')
  }
})

removeSelectedButton.addEventListener('click', function () {
  let selectedItem = document.querySelector('.selected')
  orderedList.removeChild(selectedItem)
})