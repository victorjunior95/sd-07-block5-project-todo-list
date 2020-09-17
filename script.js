const inputTextToDo = document.querySelector(".texto-tarefa");
const buttonCreateToDo = document.querySelector(".criar-tarefa");
let olToDoList = document.querySelector(".lista-tarefas");
const buttonClearAllTasksInTheList = document.querySelector(".apaga-tudo");
const buttonClearDoneTasks = document.querySelector(".remover-finalizados");
const buttonToSalveList = document.querySelector(".salvar-tarefas");

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
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
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
    let taskStorage = { task: innerTextTaskList };
    listToSaveLocalStorage.push(taskStorage);
  }
  localStorage.setItem("Tasks", JSON.stringify(listToSaveLocalStorage));
});

if (localStorage.getItem("Tasks") !== null) {
  for (
    let index = 0;
    index < JSON.parse(localStorage.getItem("Tasks")).length;
    index += 1
  ) {
    inputTextToDo.value = JSON.parse(localStorage.getItem("Tasks"))[index].task;
    createLI();
  }
}
