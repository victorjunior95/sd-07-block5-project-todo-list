let addTask = document.getElementById("criar-tarefa");
let list = document.getElementById("lista-tarefas");
let inputTask = document.getElementById("texto-tarefa");
let color = document.getElementById("selected-item");

addTask.addEventListener ("click", function() {
    let newTask = document.createElement("li")
    newTask.innerText = inputTask.value;
    list.appendChild(newTask);
    inputTask.value = "";
});

function changeColor() {
    document.querySelectorAll("li").forEach((item) => {
        item.addEventListener("click", function () {
            item.style.backgroundColor = "rgb(128, 128, 128)"
    });
  });
};
changeColor()