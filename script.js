let buttonToAdd = document.getElementById("criar-tarefa")
let orderedListElement = document.getElementById("lista-tarefas")
let array = [];

buttonToAdd.addEventListener('click', function () {
  let textTasks = document.getElementById("texto-tarefa");
  array.push(textTasks.value);
  let elementLi = document.createElement("li")
  elementLi.className = "tarefas";
  elementLi.addEventListener('click', function(event){
    event.target.style.backgroundColor = "rgb(128,128,128)";
  });
  orderedListElement.appendChild(elementLi).innerHTML = textTasks.value;
  textTasks.value = "";
})

let textTaskSetBackGroundColor = document.querySelectorAll(".tarefas");

