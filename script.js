//  variáveis
const createTaskBttn = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const deleteListBttn = document.getElementById('apaga-tudo');

//  cria evento de click no item lista
function createTaskEvent1(task) {
  task.addEventListener('click', function() {
    const currentList = document.querySelectorAll('li');
    for (let index = 0; index < currentList.length; index += 1) {
      currentList[index].classList = 'task';
    }
    task.classList.add('selected');
  });
}

//  criando evento de duplo clique no item da lista
function createTaskEvent2(task) {
  task.addEventListener('dblclick', function() {
    
  });
}

//  adicionar elemento à lista
createTaskBttn.addEventListener ('click', function() {
  const newTask = document.createElement('li');
  newTask.innerHTML = taskInput.value;
  list.appendChild(newTask);
  createTaskEvent1(newTask);
  createTaskEvent2(newTask);
  taskInput.value = '';
});

//  apagar lista
deleteListBttn.addEventListener('click', function() {
  list.innerHTML = '';
});