let inputTask = document.getElementById("texto-tarefa");
let olList = document.getElementById("lista-tarefas");
let buttonAdd = document.getElementById("criar-tarefa");

buttonAdd.addEventListener("click", function() {
    let todoList = document.createElement("li");
    todoList.innerText = inputTask.value;
    olList.appendChild(todoList);
    inputTask.value = "";
});
