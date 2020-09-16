// Projeto TO Do List

let taskInput = document.querySelector('#texto-tarefa');
console.log(taskInput);

let buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener("click",addTask);

function addTask () {
  let ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  li.innerHTML = taskInput.value;
  ol.appendChild(li);
  taskInput.value = '';
}

const listItens = document.querySelectorAll('.listItem');
let selectedItem = document.querySelector('.selected');

for (let i=0; i<listItens.length; i += 1) {
  listItens[i].addEventListener('click', graySelected);
  function graySelected() {
      selectedItem = document.querySelector('.selected');
      selectedItem.classList.remove('selected');
      listItens[i].classList.add('selected');
  }
}
