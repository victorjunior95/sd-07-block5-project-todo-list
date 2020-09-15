let textoTarefa = document.getElementById("texto-tarefa").value;
let botaoAdicionar = document.getElementById("criar-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", function() {
    let textoTarefa = document.getElementById("texto-tarefa").value;
    let elementoLista = document.createElement("li");
    elementoLista.innerHTML= textoTarefa;
    listaTarefas.appendChild(elementoLista)
    document.getElementById("texto-tarefa").value = ""
})