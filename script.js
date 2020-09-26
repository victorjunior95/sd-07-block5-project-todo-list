window.onload = function() {
    let botaoCriarTarefa = document.getElementById("criar-tarefa");
    let botaoApagaTudo = document.getElementById("apaga-tudo");
    let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
    let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
    let inputTarefa = document.getElementById("texto-tarefa");
    let listaTarefas = document.getElementById("lista-tarefas");
    let textoInput = document.getElementById("texto-tarefa");
    let count = 0;

    function criarTarefa() {
        let tarefa = document.createElement("li");
        tarefa.innerText = inputTarefa.value;
        listaTarefas.appendChild(tarefa);
        inputTarefa.value = "";
        count++;
    }

    function apagaTudo() {
        let listaTarefasApagar = listaTarefas.querySelectorAll("li");
        for (
            let index = 0; index < listaTarefasApagar.length; index++
        ) {
            listaTarefas.removeChild(listaTarefas.querySelectorAll("li")[index]);
        }
        count = 0;
    }

    function selecaoTarefa() {}

    function removerFinalizados() {}

    function salvarTarefas() {}
};