const list = document.querySelector("#lista-tarefas");
const button = document.querySelector("#criar-tarefa");
const inputText = document.querySelector("#texto-tarefa");

function createListItem(){
    let listItem = document.createElement("li");
    listItem.className = "list-item"
    listItem.innerText = inputText.value;
    list.appendChild(listItem);
    inputText.value = '';
}

button.addEventListener("click", createListItem);