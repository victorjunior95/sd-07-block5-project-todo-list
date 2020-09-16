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

function removeListItems(){
    let listElements = document.querySelectorAll("li");
    for (let index = 0; index < listElements.length; index += 1){
        listElements[index].remove();
    }
}

function removeCompletedItems(){
    let completedItems = document.querySelectorAll(".completed");
    for (let index = 0; index < completedItems.length; index += 1){
        completedItems[index].remove();
    }
}
button.addEventListener("click", createListItem);

rmAll.addEventListener("click", removeListItems);

rmSelected.addEventListener("click", removeCompletedItems);