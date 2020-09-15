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
function selectOtherLi() {
  if (selectedTask[0] !== undefined) { // Responsável por selecionar a li caso a desseleção caia no else
    selectedTask[0].classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function unselectLi() { //  Responsável por deselecionar a li
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] === event.target) {
    selectedTask[0].classList.remove('selected');
  } else {
    selectOtherLi();
  }
}

function markAsDoneLi() { //  Marca como uma tarefa concluída. Riscando.
  if (event.target.className !== 'task completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function elementCreator() { //  Criador de elementos li
  const element = document.createElement('li');
  element.innerText = inputTextTask.value;
  element.className = 'task';
  inputTextTask.value = '';
  element.addEventListener('click', unselectLi);
  element.addEventListener('dblclick', markAsDoneLi);
  return element;
}

function addTaskToList(textLoad) {  // Faz o append na lista ordenada.
  const elementLi = elementCreator();
  orderedListTasks.appendChild(elementLi);
}

function clearTaskList() {  //  Limpa a lista.
  orderedListTasks.innerHTML = '';
}

function removeCompletedTasks() { //  Tira as tarefas concluídas
  completedTasks = document.getElementsByClassName('completed');
  const numberMax = completedTasks.length;
  for (let index = 0; index < numberMax; index += 1) {
    completedTasks[0].parentElement.removeChild(completedTasks[0]);
  }
}

function removeSelectedTask() { //  Remove a tarefa selecionada
  selectedTask = document.getElementsByClassName('selected');
  if (selectedTask[0] !== undefined) {
    orderedListTasks.removeChild(selectedTask[0]);
  }
}

function saveOrderedList() { // Salva a lista no local Storage
  const toString = JSON.stringify(orderedListTasks.innerHTML);
  localStorage.setItem('keyListTask', toString);
}

function loadOrderedList() { // Carrega a lista no local Storage
  const toHtml = JSON.parse(localStorage.getItem('keyListTask'));
  orderedListTasks.innerHTML = toHtml;
  const tasks = document.getElementsByClassName('task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click', unselectLi);
    tasks[index].addEventListener('dblclick', markAsDoneLi);
  }
}

function moveTaskUp() { // Move a tarefa pra cima.
  if (selectedTask.length !== 0) { // Esse if é responsável por saber se tem uma tarefa selecionada
    if (selectedTask[0].previousElementSibling != null) { //  Aqui para filtrar se existe uma tarefa anterior.
      orderedListTasks.insertBefore(selectedTask[0], selectedTask[0].previousElementSibling); //  aqui eu insiro a tarefa atual atrás da anterior.
    }
  }
}

function moveTaskDown() { //  Move a tarefa pra baixo.
  if (selectedTask.length !== 0) { // Esse if é responsável por saber se tem uma tarefa selecionada 
    if (selectedTask[0].nextElementSibling != null) { //  Aqui para filtrar se existe uma tarefa anterior.
      const afterElement = selectedTask[0].nextElementSibling.nextElementSibling; //  Constante que recebe o elemento posterior do posterior.
      orderedListTasks.insertBefore(selectedTask[0], afterElement); // aqui eu insiro o anterior ao posterior.
    } else {
      orderedListTasks.appendChild(selectedTask[0]); // Aqui caso não tenha elemento posterior eu simplesmento coloco-o no final com o append. (Suspeito de bug aqui!)
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
