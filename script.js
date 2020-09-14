const addButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');

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
    listItem.className = 'selected'
    console.log('tete')
  })
}

// remove selected class from the task
function removeSelectedClassFromPrevious() {
  let selectedItem = document.querySelectorAll('.selected');
  if (selectedItem.length > 0) {
    selectedItem[0].className = ''
  }
}

function completedTask(listItem) {
  listItem.addEventListener('dblclick', function () {
    if (listItem.className === 'completed') {
      listItem.className = '';
    } else {
      listItem.className = 'completed';
    }
  });
}

let newobj = document.querySelectorAll('#newtest')[0]
console.log(newobj)

newobj.addEventListener('doubleclick', function () {
  console.log('teste')
  event.target.className = 'completed'
})

deleteButton.addEventListener('click', function () {
  let allItem = document.querySelectorAll('li')
  for (let item = 0; item < allItem.length; item += 1) {
    orderedList.removeChild(allItem[item])
  }
})

deleteButton.addEventListener('click', function () {
  let allCompletedTasks = document.querySelectorAll('.completed')
  for (let item = 0; item < allItem.length; item += 1) {
    orderedList.removeChild(allItem[item])
  }
})
