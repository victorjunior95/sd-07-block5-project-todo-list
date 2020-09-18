const inputTextToDo = document.querySelector(".texto-tarefa");
const buttonCreateToDo = document.querySelector(".criar-tarefa");
let olToDoList = document.querySelector(".lista-tarefas");
const buttonClearAllTasksInTheList = document.querySelector(".apaga-tudo");
const buttonClearDoneTasks = document.querySelector(".remover-finalizados");
const buttonToSalveList = document.querySelector(".salvar-tarefas");
const buttonRemoveSelectedTask = document.querySelector('.remover-selecionado')


function clearInputTextToDo() {
  inputTextToDo.value = "";
}

function createLI() {
  const liTask = document.createElement("li");
  liTask.innerText = inputTextToDo.value;
  olToDoList.appendChild(liTask);
  clearInputTextToDo();
  changeBGColorTask(liTask);
  addAndRemoveCompletedTask(liTask);
}

buttonCreateToDo.addEventListener("click", createLI);

function changeBGColorTask(task) {
  task.addEventListener("click", function (event) {
    for (let index = 0; index < olToDoList.childElementCount; index += 1) {
      if (olToDoList.children[index] !== event.target) {
        olToDoList.children[index].style.backgroundColor = "";
      }
    }
    event.target.classList.add('selected');
  });
}

function addAndRemoveCompletedTask(task) {
  task.addEventListener("dblclick", function () {
    if (task.classList.value === "completed") {
      task.classList.remove("completed");
    } else {
      task.classList.add("completed");
    }
  });
}

buttonClearAllTasksInTheList.addEventListener("click", function () {
  olToDoList.innerHTML = "";
});

buttonClearDoneTasks.addEventListener("click", function () {
  let doneTasks = document.querySelectorAll(".completed");
  doneTasks.forEach((item) => {
    // usei esse link pra resolver essa parte: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    olToDoList.removeChild(item);
  });
});

buttonToSalveList.addEventListener("click", function () {
  let listToSaveLocalStorage = [];
  for (let index = 0; index < olToDoList.childElementCount; index += 1) {
    let innerTextTaskList = olToDoList.children[index].innerText;
    let completedTrueOrFalse = false;
    if (olToDoList.children[index].classList.contains("completed")) {
      completedTrueOrFalse = true;
    } else {
      completedTrueOrFalse = false;
    }
    let taskStorage = {
      task: innerTextTaskList,
      completed: completedTrueOrFalse,
    };
    listToSaveLocalStorage.push(taskStorage);
  }
  localStorage.setItem("Tasks", JSON.stringify(listToSaveLocalStorage));
});

function createLILocalStorage(taskText, taskClass) {
  const liTask = document.createElement("li");
  liTask.innerText = taskText;
  olToDoList.appendChild(liTask);
  changeBGColorTask(liTask);
  addAndRemoveCompletedTask(liTask);
  if (taskClass === true) {
    liTask.classList.add("completed");
  }
}

if (localStorage.getItem("Tasks") !== null) {
  let jsonParseGetItem = JSON.parse(localStorage.getItem("Tasks"));
  let lengthLocalStorageList = jsonParseGetItem.length;
  for (
    let index = 0;
    index < lengthLocalStorageList;
    index += 1
  ) {
    createLILocalStorage(jsonParseGetItem[index].task, jsonParseGetItem[index].completed);
  }
}

buttonRemoveSelectedTask.addEventListener('click', function () {
    for (let index = 0; index < olToDoList.childElementCount; index += 1) {
      if (olToDoList.children[index].classList.contains('selected')) {
        olToDoList.removeChild(olToDoList.children[index]);
      }
    }
})