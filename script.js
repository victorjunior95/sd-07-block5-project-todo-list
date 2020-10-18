let botaoCriarTarefa = document.getElementById("criar-tarefa");
let botaoApagaTudo = document.getElementById("apaga-tudo"); 
let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
let inputTarefa = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let selecao = document.querySelector(".selecionado");

function criarTarefa() {
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = "";
    tarefa.addEventListener("click", selecaoTarefa);
    tarefa.addEventListener("dbclick", tarefaCompleta);
}

function apagaTudo() {
    let listaTarefasApagar = listaTarefas.querySelectorAll("li");
    for (let index = 0; index < listaTarefasApagar.length; index++) {
        listaTarefas.removeChild(listaTarefasApagar[index]);
    }
}

function selecaoTarefa(event) {
    if (selecao !== null) {
        selecao.classList.remove("selecionado");
        event.target.classList.add("selecionado");
        selecao = event.target;
    } else {
        event.target.classList.add("selecionado");
        selecao = event.target;
    }
}

function removerFinalizados() {}

function salvarTarefas() {}