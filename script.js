let botaoCriarTarefa = document.getElementById("criar-tarefa");

botaoCriarTarefa.addEventListener("click", function() {
    let inputTarefa = document.getElementById("texto-tarefa").value;
    let novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = inputTarefa;
    document.getElementById("lista-tarefas").appendChild(novaTarefa);
});