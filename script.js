const list = document.querySelector("#lista-tarefas");
const button = document.querySelector("#criar-tarefa");
const inputText = document.querySelector("#texto-tarefa");
const selected = document.querySelector(".selected");
const rmSelected = document.querySelector("#remover-finalizados");
const rmAll = document.querySelector("#apaga-tudo");

function selectItem(){
   event.target.classList.toggle('selected');
}

function toggleComplete(event){
    event.target.classList.toggle('completed');
}
function createListItem (){
    const listItem = document.createElement("li");
    listItem.innerText = inputText.value;
    listItem.addEventListener("click", selectItem);
    listItem.addEventListener("dblclick", toggleComplete);
    list.appendChild(listItem);
    inputText.value = '';
}
button.addEventListener("click", createListItem);