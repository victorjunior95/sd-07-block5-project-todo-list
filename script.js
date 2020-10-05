let inputTask = document.getElementById("texto-tarefa");
let olList = document.getElementById("lista-tarefas");
let buttonAdd = document.getElementById("criar-tarefa");
let deleteButton = document.getElementById('apaga-tudo');


buttonAdd.addEventListener("click", function() {
    let todoList = document.createElement("li");
    todoList.innerText = inputTask.value;
    olList.appendChild(todoList);
    inputTask.value = "";
});

olList.addEventListener("dblclick", function(event) {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("completed");
    }    
}); 

olList.addEventListener("click", function(event) {
    if (event.target.tagName == "LI") {
    let selectedItem = document.querySelector(".selected");
    if (selectedItem !== null) {
    selectedItem.classList.remove("selected");    
        }
    event.target.classList.add("selected");
    }
});

deleteButton.addEventListener('click', function () {
    olList.innerHTML = '';
  });
