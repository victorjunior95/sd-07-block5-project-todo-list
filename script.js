let createTask = document.getElementById("criar-tarefa");
let listTask = document.getElementById("lista-tarefas");
let selectedClass;
let taskClear = document.getElementById("apaga-tudo");
let clearCompleted = document.getElementById("remover-finalizados");

createTask.addEventListener("click", function () {
  let createElementList = document.createElement("li");
  let recordValue = document.getElementById("texto-tarefa");
  let createList = document.createTextNode(recordValue.value);
  createElementList.appendChild(createList);
  if (recordValue.value == "") {
    alert("Adicione uma tarefa");
  } else {
    listTask.appendChild(createElementList);
    recordValue.value = "";
  }
});

listTask.addEventListener("click", function (event) {
  if (selectedClass === undefined) {
    event.target.classList.add("selected");
    selectedClass = document.getElementsByClassName("selected")[0];
  } else if (event.target.classList[0] == "selected") {
    event.target.classList.toggle("selected");
    selectedClass = document.getElementsByClassName("selected")[0];
  } else {
    selectedClass.classList.remove("selected");
    event.target.classList.add("selected");
    selectedClass = document.getElementsByClassName("selected")[0];
  }
});

listTask.addEventListener("dblclick", function (event) {
  event.target.classList.toggle("completed");
});

taskClear.addEventListener("click", function () {
  while (listTask.firstChild) {
    listTask.removeChild(listTask.firstChild);
  }
});

clearCompleted.addEventListener("click", function () {
  let completed = document.getElementsByClassName("completed");
  for (let index = 0; index < completed.length; index += 1) {
    listTask.removeChild(completed[index]);
  }
});
