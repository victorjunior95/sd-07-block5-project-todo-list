let createTask = document.getElementById("criar-tarefa");
let listTask = document.getElementById("lista-tarefas");

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
