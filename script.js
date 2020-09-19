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

listTasks.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});

listTasks.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

