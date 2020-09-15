function completeTask(event) {
  event.target.classList.toggle('completed',true);
}
function selectTask(event) {
  // const tasks = document.querySelectorAll('#lista-tarefas li');
  let selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.toggle('selected',true);
}
function createTask() {
  const textTask = document.querySelector('#texto-tarefa');
  const listTasks = document.querySelector('#lista-tarefas');

  const newTask = document.createElement('li');
  newTask.innerText = textTask.value;
  newTask.addEventListener('click', selectTask);
  newTask.addEventListener('dblclick', completeTask);
  textTask.value = '';
  listTasks.appendChild(newTask);
}
window.onload = function () {
  const createTaskButton = document.querySelector('#criar-tarefa');

  createTaskButton.addEventListener('click', createTask);
};
