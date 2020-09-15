//	DEFINIÇÕES INICIAIS
const task = document.querySelector('#texto-tarefa');
const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');

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
  clearSelection();
  addSelection(event.target);
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
