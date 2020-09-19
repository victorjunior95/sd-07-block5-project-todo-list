let buttonAdd = document.getElementById('criar-tarefa');
let textTask = document.getElementById('texto-tarefa');
let listTasks = document.getElementById('lista-tarefas');

function addingTask() {
  if (textTask.value !== '') {
    const task = document.createElement('li');
    task.innerText = textTask.value;
    listTasks.appendChild(task);
    textTask.value = '';
  }
}
buttonAdd.addEventListener('click', addingTask);



