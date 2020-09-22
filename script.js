const inputTextToDo = document.querySelector('.texto-tarefa');
const buttonCreateToDo = document.querySelector('.criar-tarefa');
const olToDoList = document.querySelector('.lista-tarefas');
const buttonClearAllTasksInTheList = document.querySelector('.apaga-tudo');
const buttonClearDoneTasks = document.querySelector('.remover-finalizados');
const buttonToSalveList = document.querySelector('.salvar-tarefas');
const buttonRemoveSelectedTask = document.querySelector('.remover-selecionado');
const buttonMoveUp = document.querySelector('.mover-cima');
const buttonMoveDown = document.querySelector('.mover-baixo');

function clearInputTextToDo() {
  inputTextToDo.value = '';
}

function changeBGColorTask(task) {
  task.addEventListener('click', function (event) {
    for (let index = 0; index < olToDoList.childElementCount; index += 1) {
      if (olToDoList.children[index] !== event.target) {
        olToDoList.children[index].classList.remove('selected');
      } else {
        event.target.classList.add('selected');
      }
    }
  });
}

function addAndRemoveCompletedTask(task) {
  task.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      task.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

function createLI() {
  const liTask = document.createElement('li');
  liTask.innerText = inputTextToDo.value;
  olToDoList.appendChild(liTask);
  clearInputTextToDo();
  changeBGColorTask(liTask);
  addAndRemoveCompletedTask(liTask);
}

buttonCreateToDo.addEventListener('click', createLI);

buttonMoveUp.addEventListener('click', function () {
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    if (olToDoList.children[index].classList.contains('selected')) {
      if (olToDoList.children[index] === olToDoList.firstChild) {
        alert('impossível mover para cima!');
      } else {
        olToDoList.insertBefore(olToDoList.children[index], olToDoList.children[index].previousElementSibling);
      }
    }
  }
})

buttonMoveDown.addEventListener('click', function () {
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    if (olToDoList.children[index].classList.contains('selected')) {
      if(olToDoList.children[index] === olToDoList.lastChild) {
        alert('impossível mover para baixo!');
      } else {
        olToDoList.children[index].nextElementSibling.after(olToDoList.children[index])
        break;
      }
    }
  }
});

buttonClearAllTasksInTheList.addEventListener('click', function () {
  olToDoList.innerHTML = '';
});

buttonRemoveSelectedTask.addEventListener('click', function () {
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    if (olToDoList.children[index].classList.contains('selected')) {
      olToDoList.removeChild(olToDoList.children[index]);
    }
  }
});

buttonClearDoneTasks.addEventListener('click', function () {
  const doneTasks = document.querySelectorAll('.completed');
  doneTasks.forEach((item) => {
    // usei esse link pra resolver essa parte: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    olToDoList.removeChild(item);
  });
});

buttonToSalveList.addEventListener('click', function () {
  const listToSaveLocalStorage = [];
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    const innerTextTaskList = olToDoList.children[index].innerText;
    const completedTrueOrFalse = false;
    if (olToDoList.children[index].classList.contains('completed')) {
      completedTrueOrFalse = true;
    } else {
      completedTrueOrFalse = false;
    }
    const taskStorage = {
      task: innerTextTaskList,
      completed: completedTrueOrFalse,
    };
    listToSaveLocalStorage.push(taskStorage);
  }
  localStorage.setItem('Tasks', JSON.stringify(listToSaveLocalStorage));
});

function createLILocalStorage(taskText, taskClass) {
  const liTask = document.createElement('li');
  liTask.innerText = taskText;
  olToDoList.appendChild(liTask);
  changeBGColorTask(liTask);
  addAndRemoveCompletedTask(liTask);
  if (taskClass === true) {
    liTask.classList.add('completed');
  }
}

if (localStorage.getItem('Tasks') !== null) {
  const jsonParseGetItem = JSON.parse(localStorage.getItem('Tasks'));
  const lengthLocalStorageList = jsonParseGetItem.length;
  for (let index = 0; index < lengthLocalStorageList; index += 1) {
    createLILocalStorage(
      jsonParseGetItem[index].task,
      jsonParseGetItem[index].completed,
    );
  }
}
