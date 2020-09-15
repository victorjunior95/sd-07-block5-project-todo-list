//  variáveis
const createTaskBttn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const deleteListBttn = document.getElementById('apaga-tudo');
const removeCompletedBttn = document.getElementById('remover-finalizados');

//  cria evento de click no item lista
function createTaskEvent1(task) {
  task.addEventListener('click', function() {
    const currentList = document.querySelectorAll('.list-element');
    for (let index = 0; index < currentList.length; index += 1) {
      currentList[index].classList.remove('selected');
    }
    task.classList.add('selected');
  });
}

//  funçao auxiliar para criação de evento de duplo clique
function checkCompleted(taskClasses) {
  console.log(taskClasses)
  for (let index = 0; index < taskClasses.length; index += 1) {
    if (taskClasses[index] === 'completed') {
      return true;
    }
  }
  return false;
}

//  criando evento de duplo clique no item da lista
function createTaskEvent2(task) {
  task.addEventListener('dblclick', function () {
    if (checkCompleted(task.classList) === true) {
      task.classList.remove('completed');
    } else {
      task.classList.add('completed');
    }
  });
}

//  adicionar elemento à lista
createTaskBttn.addEventListener('click', function () {
  const newTask = document.createElement('li');
  newTask.innerHTML = taskInput.value;
  newTask.classList.add('list-element');
  list.appendChild(newTask);
  createTaskEvent1(newTask);
  createTaskEvent2(newTask);
  taskInput.value = '';
});

//  apagar lista
deleteListBttn.addEventListener('click', function () {
  list.innerHTML = '';
});

//  apagar tarefas finalizadas
removeCompletedBttn.addEventListener('click', function () {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
});
