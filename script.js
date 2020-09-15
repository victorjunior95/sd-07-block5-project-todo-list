// Projeto TO Do List

let taskInput = document.querySelector('#texto-tarefa');
console.log(taskInput);

let createTaskButton = document.querySelector('#criar-tarefa');
createTaskButton.addEventListener("click",addTask);

function addTask () {
  let ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  li.innerHTML = taskInput.value;
  ol.appendChild(li);
}

