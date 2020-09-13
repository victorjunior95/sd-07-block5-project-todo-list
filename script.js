let textoTarefa = document.querySelector("#texto-tarefa")

let btnRemoverFinalizados = document.querySelector("#remover-finalizados")
let btnSalvarTarefas = document.querySelector("#salvar-tarefas")
let btnMoverCima = document.querySelector("#mover-cima")
let btnMoverBaixo = document.querySelector("#mover-baixo")
let btnRemoverSelecionado = document.querySelector("#remover-selecionado")


/* ----------------- */
let btnCriarTarefa = document.querySelector("#criar-tarefa")
btnCriarTarefa.addEventListener("click", criarTarefa)

let btnApagaTudo = document.querySelector("#apaga-tudo")
btnApagaTudo.addEventListener("click", apagarTudo)

/* Funcõesd */

function criarTarefa() {
    let listaTarefas =document.querySelector("#lista-tarefas")
    let textoTarefa = document.querySelector("#texto-tarefa")
    if (textoTarefa.value != "") {
        let tarefa = document.createElement("li")
        tarefa.addEventListener("click", selecionarTarefa)
        tarefa.innerText = textoTarefa.value
        textoTarefa.value = ""
        listaTarefas.appendChild(tarefa)
    }
}

function apagarTudo(){
    let listaTarefas =document.querySelector("#lista-tarefas")
    listaTarefas.innerHTML = ""
}

function selecionarTarefa(){
    let listaTarefas =document.querySelector("#lista-tarefas")
    event.target.className = "selected"
}