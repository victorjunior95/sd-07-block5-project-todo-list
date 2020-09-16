//	DEFINIÇÕES INICIAIS
const task = document.querySelector('#texto-tarefa');
const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnRemoveSelected = document.querySelector('#remover-selecionado');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');

//  FUNÇÕES
function addTask() {
  const li = document.createElement('li');
	li.innerText = task.value;
	taskList.appendChild(li);
}
function clearInput() {
  task.value = '';
}
function clearSelection() {
  let items = document.querySelectorAll('#lista-tarefas li');
  for (index = 0; index < items.length; index += 1) {
    items[index].classList.remove('selected');
  }
}
function addSelection(target) {
  target.classList.add('selected');
}
function toggleCompleted(target) {
  target.classList.toggle('completed');
}
function clearList() {
  taskList.innerHTML = '';
}
function clearCompleted() {
  let taskListItems = taskList.querySelectorAll('.completed');
  for (let index = 0; index < taskListItems.length; index += 1) {
      taskList.removeChild(taskListItems[index]);
  }
}
function saveTasks() {
  let tasks = taskList.innerHTML;
  localStorage.setItem('tasks', tasks);
}
function loadTasks() {
  let loadedTasks = localStorage.getItem('tasks');
  taskList.innerHTML = loadedTasks;
}
function removeSelected(selected) {
  taskList.removeChild(selected);
}
function moveUp(before, selected) {
  let after = before.innerHTML;
  before.innerHTML = selected.innerHTML;
  selected.innerHTML = after;
  let classAfter = before.className;
  before.className = selected.className;
  selected.className = classAfter;
}
function moveDown(after, selected) {
  let before = after.innerHTML;
  after.innerHTML = selected.innerHTML;
  selected.innerHTML = before;
  let classBefore = after.className;
  after.className = selected.className;
  selected.className = classBefore;
}

//  EVENTOS
//  Evento do botão criar tarefa
window.onload = function () {
  loadTasks();
};
btnTask.addEventListener('click', function () {
  addTask();
	clearInput();
});
taskList.addEventListener('click', function (event) {
  if (event.target != taskList){
    clearSelection();
    addSelection(event.target);
  }
});
taskList.addEventListener('dblclick', function (event) {
  toggleCompleted(event.target);
});
btnClearAll.addEventListener('click', function () {
  clearList();
});
btnClearCompleted.addEventListener('click', function () {
  clearCompleted();
});
btnSaveTasks.addEventListener('click', function () {
  saveTasks();
});
btnRemoveSelected.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  removeSelected(selected);
});
btnMoveUp.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  if (selected != null) {
    let before = selected.previousElementSibling;
    if (before != null) {
      moveUp(before, selected);
    }
  }
});
btnMoveDown.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  if (selected != null) {
    let after = selected.nextElementSibling;
    if (after != null) {
      moveDown(after, selected);
    }
  }
});
