let botaoCriarTarefa = document.getElementById("criar-tarefa");
let botaoApagaTudo = document.getElementById("apaga-tudo"); 
let botaoRemoverFinalizados = document.getElementById("remover-finalizados");
let botaoSalvarTarefas = document.getElementById("salvar-tarefas");
let botaoRemoverSelecionados = document.getElementById("remover-selecionado")
let inputTarefa = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let textoInput = document.getElementById("texto-tarefa");
let selecao = document.querySelector(".selecionado");
let completed = document.querySelector(".completed");
let botaoMoverCima = document.getElemenyById("mover-cima");
let botaoMoverBaixo = document.getElemenyById("mover-baixo");



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
// function checarTarefasSalvas()
// {
//     if (localStorage.length > 0){
//         taskList.innerHTML = localStorage.getItem('tarefasSalvas');
//         console.log(listaTarefas);
//         let listaTarefas2 = listaTarefas.querySelector('li');
//         listaTarefas2.forEach((tarefa1) => {
//             tarefa1.addEventListener('dblclick', tarefaCompleta);
//             tarefa1.addEventListener('click', selecaoTarefa);
//         });
//     }
// }
// checarTarefasSalvas();

function salvarTarefas() {
    localStorage.setItem('tarefasSalvas', listaTarefas.innerHTML);
}
function removeSelecionados(){
    listaTarefas.removeChild(selecao);
}
function removeFinalizados(){
    let listaTarefas2 = listaTarefas.querySelectorAll('li');
    for (i=0; i < listaTarefas2.length; i+=1){
        if (listaTarefas2[i].classList.contains('completed')){
            listaTarefas.removeChild(listaTarefas2[i]);
        }
    }
}
function moverBaixo(){
    if (selecao !== null) {
        if (selecao.nextSibling !== null) {
            selecao.parentNode.insertBefore(selecao.nextSibling, selecao);
        }
    }
}

function moverCima(){
    if (selecao !== null) {
        if (selecao.nextSibling !== null) {
            selecao.parentNode.insertBefore(selecao, selecao.previousSibling);
        }
    }
}