let inputTask = document.querySelector("#texto-tarefa");
let inputTaskBtn = document.querySelector("#criar-tarefa");
let orderedList = document.querySelector("#lista-tarefas");
let indexTask = 0;
let firstTime = true;
let removerBtn = document.querySelector("#remover-finalizados");

removerBtn.addEventListener("click", function() {
  let completed = document.getElementByClassName("completed");
  for (index = 0; index < completed.length; index += 1) {
    orderedList.removeChild(completed[index]);
  }
})
inputTaskBtn.addEventListener("click", function() {
  indexTask += 1;
  let id = "task-li" + indexTask;
  createLi(orderedList, id);

  let setTaskId = "#task-li" + indexTask.toString();
  let taskLi = document.querySelector(setTaskId);
  taskLi.innerHTML = inputTask.value;
  inputTask.value = "";

  taskLi.addEventListener("click", function() {
    selectTask(setTaskId);
  })

  taskLi.addEventListener('dblclick', function() {
    doubleClickTask(setTaskId);
  })
})
function doubleClickTask(id) {
  let elem = document.querySelector(id);
  if (firstTime !== false) {
    firstTime = false;
    elem.className += ' completed';
  } else {
    firstTime = true;
    elem.className = 'item-list selected-task';
  }
}
function selectTask(id) {
  let elem = document.querySelector(id);
  clicked = true;
  if (elem.classList.contains('completed')) {
    elem.className = "item-list selected-task completed";
  } else {
    elem.className = "item-list selected-task";
  }

  let allSelected = document.querySelectorAll('.selected-task');

  for (index = 0; index < allSelected.length; index += 1) {
    if (allSelected[index] !== elem) {
      let replaceClass = allSelected[index].classList.remove('selected-task');
    }
  }
}

function createLi(where, id) {
  let list = document.createElement("li");
  where.appendChild(list);
  list.className = "item-list";
  list.id = id;
}