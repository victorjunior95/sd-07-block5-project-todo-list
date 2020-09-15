let buttonToAdd = document.getElementById("criar-tarefa")
let orderedListElement = document.getElementById("lista-tarefas")
let array = [];


buttonToAdd.addEventListener('click', function () {
  let textTasks = document.getElementById("texto-tarefa");
  array.push(textTasks.value);
  let elementLi = document.createElement("li");
  orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
  textTasks.value = "";
})
