let buttonCriarTarefa = document.getElementById("criar-tarefa");
let inputTextoTarefa = document.getElementById("texto-tarefa");
let olListaTarefas = document.getElementById("lista-tarefas");

buttonCriarTarefa.addEventListener("click", function() {
    let itemList = document.createElement("li");
    itemList.innerText = inputTextoTarefa.value;
    olListaTarefas.appendChild(itemList);
    inputTextoTarefa.value = "";
});

