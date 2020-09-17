// Projeto TO Do List

let taskInput = document.querySelector('#texto-tarefa');
// console.log(taskInput);
let buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener("click",addTask);

function addTask () {
  let ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  li.innerHTML = taskInput.value;
  li.classList.add('listItem');
  ol.appendChild(li);
  taskInput.value = '';
  li.addEventListener('click', graySelected);
  li.addEventListener('dblclick', lineThroughSelected);
}

let listItens = document.querySelectorAll('.listItem');
let selectedItem = document.querySelector('.selected');
let completedItem = document.querySelector('.completed');

for (let i=0; i<listItens.length; i += 1) {
  listItens[i].addEventListener('click', graySelected);
  listItens[i].addEventListener('dblclick', lineThroughSelected);
}

function graySelected(event) {
  selectedItem = document.querySelector('.selected');
  selectedItem.classList.remove('selected');
  event.target.classList.add('selected');
}

function lineThroughSelected(event) {
  // console.log(event.target.classList.value);
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed')}
  else {
    event.target.classList.add('completed')}
}

