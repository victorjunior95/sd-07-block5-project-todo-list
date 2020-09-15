//	DEFINIÇÕES INICIAIS
const task = document.querySelector('#texto-tarefa');
const btnTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

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

//  EVENTOS
//  Evento do botão criar tarefa
btnTask.addEventListener('click', function () {
	addTask();
	clearInput();
});
taskList.addEventListener('click', function (event) {
  let target = event.target;
  clearSelection();
  addSelection(target);
});
