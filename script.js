//  Text Inputs
const inputTextTask = document.getElementById('texto-tarefa');

//  Buttons Inputs
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonClearTaskList = document.getElementById('apaga-tudo');
const buttonRemoveCompletedTasks = document.getElementById('remover-finalizados');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonLoadTasks = document.getElementById('carregar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');

//  Ordered List Outputs
const orderedListTasks = document.getElementById('lista-tarefas');
let selectedTask = document.getElementsByClassName('selected');
let completedTasks = document.querySelectorAll('.completed');

//  Functions
//  Responsável por selecionar a li caso a desseleção caia no else
function selectOtherLi() {
  if (selectedTask[0] !== undefined) {
    selectedTask[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}
//  Responsável por deselecionar a li
function unselectLi() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] === event.target) {
    selectedTask[0].classList.remove('selected');
  } else {
    selectOtherLi();
  }
}

//  Marca como uma tarefa concluída. Riscando.
function markAsDoneLi() {
  if (event.target.className !== 'task completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

//  Criador de elementos li
function elementCreator() {
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  element.className = 'task';
  inputTextTask.value = '';
  element.addEventListener('click', unselectLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

//  Faz o append na lista ordenada.
function addTaskToList() {
  const elementLi = elementCreator();
  orderedListTasks.appendChild(elementLi);
}

//  Limpa a lista.
function clearTaskList() {
  orderedListTasks.innerHTML = '';
}

//  Tira as tarefas concluídas
function removeCompletedTasks() {
  completedTasks = document.getElementsByClassName('completed');
  const numberMax = completedTasks.length;
  for (let index = 0; index < numberMax; index += 1) {
    completedTasks[0].parentElement.removeChild(completedTasks[0]);
  }
}

//  Remove a tarefa selecionada
function removeSelectedTask() {
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] !== undefined) {
    orderedListTasks.removeChild(selectedTask[0]);
  }
}

//  Salva a lista no local Storage
function saveOrderedList() {
  const toString = JSON.stringify(orderedListTasks.innerHTML);
  localStorage.setItem('keyListTask', toString);
}

//  Carrega a lista no local Storage
function loadOrderedList() {
  const toHtml = JSON.parse(localStorage.getItem('keyListTask'));
  orderedListTasks.innerHTML = toHtml;
  const tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', unselectLi);
    tasks[index].addEventListener('dblclick', markAsDoneLi);
  }
}

// Move a tarefa pra cima.
// O primeiro if é responsável por saber se tem uma tarefa selecionada.
//  O segundo if é para filtrar se existe uma tarefa anterior.
//  Por fim eu insiro a tarefa atual atrás da anterior.
function moveTaskUp() {
  if (selectedTask.length !== 0) {
    if (selectedTask[0].previousElementSibling != null) {
      orderedListTasks.insertBefore(selectedTask[0], selectedTask[0].previousElementSibling);
    }
  }
}

//  Move a tarefa pra baixo.
//  O primeiro if é responsável por saber se tem uma tarefa selecionada.
//  O segundo if para filtrar se existe uma tarefa anterior.
//  Depois uma Constante que recebe o elemento posterior ao posterior.
//  Então eu insiro o selecionado anteriormente ao posterior.
//  Se não tem elemento posterior eu simplesmento coloco-o no final com o append.
//  (Suspeito de bug aqui!)
function moveTaskDown() {
  if (selectedTask.length !== 0) {
    if (selectedTask[0].nextElementSibling != null) {
      const afterElement = selectedTask[0].nextElementSibling.nextElementSibling;
      orderedListTasks.insertBefore(selectedTask[0], afterElement);
    } else {
      orderedListTasks.appendChild(selectedTask[0]);
    }
  }
}

// Event Listeners
buttonCreateTask.addEventListener('click', addTaskToList);
buttonClearTaskList.addEventListener('click', clearTaskList);
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);
buttonRemoveSelected.addEventListener('click', removeSelectedTask);
buttonSaveTasks.addEventListener('click', saveOrderedList);
buttonLoadTasks.addEventListener('click', loadOrderedList);
buttonMoveUp.addEventListener('click', moveTaskUp);
buttonMoveDown.addEventListener('click', moveTaskDown);

//  Initializing Scripts
if (localStorage.length !== 0) {
  window.onload = loadOrderedList;
}
