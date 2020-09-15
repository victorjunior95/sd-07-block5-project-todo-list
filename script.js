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

//  EVENTOS
//  Evento do botão criar tarefa
btnTask.addEventListener('click', function () {
	addTask();
	clearInput();
});
