let botaoCriarTarefa = document.getElementById("criar-tarefa");
let botaoApagaTudo = document.getElementById("apaga-tudo"); 
let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
let inputTarefa = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let selecao = document.querySelector(".selecionado");
let completed = document.querySelector(".completed");


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

function tarefaCompleta(event){
    if (event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }
}

function criarTarefa() { 
    let tarefa = document.createElement("li");
    tarefa.innerText = inputTarefa.value;
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = null;    
    tarefa.addEventListener('dblclick', tarefaCompleta);
    tarefa.addEventListener('click', selecaoTarefa);
}

function apagaTudo() {
    let listaTarefasApagar = listaTarefas.querySelectorAll("li");
    for (let index = 0; index < listaTarefasApagar.length; index++) {
        listaTarefas.removeChild(listaTarefasApagar[index]);
    }
}



function removerFinalizados() {}

function salvarTarefas() {
    localStorage.setItem('tarefasSalvas', listaTarefas.innerHTML);
}