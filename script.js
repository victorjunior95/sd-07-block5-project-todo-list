function selectTask(event) {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach(task => {
    task.className = '';
  });
  event.target.className = 'selected';
}
function createTask() {
  const textTask = document.querySelector('#texto-tarefa');
  const listTasks = document.querySelector('#lista-tarefas');

  const newTask = document.createElement('li');
  newTask.innerText = textTask.value;
  newTask.addEventListener('click',selectTask);
  textTask.value = "";
  listTasks.appendChild(newTask);
}
window.onload = function () {
  const createTaskButton = document.querySelector("#criar-tarefa");

  createTaskButton.addEventListener('click', createTask);
};
