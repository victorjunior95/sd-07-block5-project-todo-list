let inputTask = document.querySelector("#texto-tarefa");
let inputTaskBtn = document.querySelector("#criar-tarefa");
let orderedList = document.querySelector("#lista-tarefas");
let indexTask = 0;

inputTaskBtn.addEventListener("click", function() {
  indexTask += 1;
  let id = "task-li" + indexTask;
  createLi(orderedList, id);

  let setTaskId = "#task-li" + indexTask.toString();
  let taskLi = document.querySelector(setTaskId);
  taskLi.innerHTML = inputTask.value;
  inputTask.value = "";

  taskLi.addEventListener("click", function() {
    selectTask(orderedList, setTaskId);
  })
})

function selectTask(where, id) {
  let taskStyle = document.createElement("style");
  where.appendChild(taskStyle);
  taskStyle.innerHTML = id + " { background-color: rgb(128, 128, 128) }";
}

function createLi(where, id) {
  let list = document.createElement("li");
  where.appendChild(list);
  list.className = "item-list";
  list.id = id;
}