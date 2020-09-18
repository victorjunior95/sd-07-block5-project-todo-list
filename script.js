let taskList = [];

document.getElementById("criar-tarefa").addEventListener("click", function (e){
  e.preventDefault();
  const task = document.getElementById("texto-tarefa");
  let liElement = document.createElement("li");
  let list = document.getElementById("lista-tarefas");
  liElement.innerHTML = task.value;
  task.value = "";
  liElement.addEventListener("click", function(e) {
    let origin = document.querySelector(".grey");
    origin !== null ? origin.classList.remove("grey"):'';
    e.target.classList.add("grey");
  });
  taskList.push(liElement);
  list.appendChild(liElement);
});


