let inputTask = document.querySelector("#texto-tarefa");
let inputTaskBtn = document.querySelector("#criar-tarefa");
let orderedList = document.querySelector("#lista-tarefas");

inputTaskBtn.addEventListener("click", function() {
  let list = document.createElement("li");
  orderedList.appendChild(list);
  list.className = "item-list";

  list.innerHTML += inputTask.value;
  inputTask.value = "";
})