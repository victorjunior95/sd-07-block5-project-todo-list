buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener("click", criarItem);

function criarItem() {
    let inputTexto = document.getElementById("texto-tarefa");
    if (inputTexto.value != "") {
        let novoItem = document.createElement("li");
        novoItem.innerText = inputTexto.value;
        let listaTarefas = document.getElementById("lista-tarefas");
        listaTarefas.appendChild(novoItem);
        inputTexto.value = "";
    }
}