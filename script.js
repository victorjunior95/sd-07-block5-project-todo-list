let addTask = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
let inputTask = document.getElementById("texto-tarefa");

addTask.addEventListener ("click", function() {
    let newTask = document.createElement("li")
    newTask.innerText = inputTask.value;
    list.appendChild(newTask);
    inputTask.value = "";

    newTask.addEventListener ("click", function () {
    let itemSelected = document.querySelector(".selected");
    if (itemSelected) {
        itemSelected.classList.remove("selected");
    }
    newTask.classList.add("selected")
    });

    newTask.addEventListener ("dblclick", function () {
        //// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
        newTask.classList.toggle("completed");
    });
});