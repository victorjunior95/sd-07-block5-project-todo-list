let textoTarefa = document.querySelector("#texto-tarefa")


let btnSalvarTarefas = document.querySelector("#salvar-tarefas")
let btnMoverCima = document.querySelector("#mover-cima")
let btnMoverBaixo = document.querySelector("#mover-baixo")

let btnRemoverFinalizados = document.querySelector("#remover-finalizados")
btnRemoverFinalizados.addEventListener("click", apagarCompleto)

let btnRemoverSelecionado = document.querySelector("#remover-selecionado")
btnRemoverSelecionado.addEventListener("click", apagarSelecionado)

let btnCriarTarefa = document.querySelector("#criar-tarefa")
btnCriarTarefa.addEventListener("click", criarTarefa)

let btnApagaTudo = document.querySelector("#apaga-tudo")
btnApagaTudo.addEventListener("click", apagarTudo)

/* Funcões */

function criarTarefa() {
    let listaTarefas = document.querySelector("#lista-tarefas")
    let textoTarefa = document.querySelector("#texto-tarefa")
    if (textoTarefa.value != "") {
        let tarefa = document.createElement("li")
        tarefa.addEventListener("click", clicarTarefa)
        tarefa.addEventListener("dblclick", completaTarefa)
        tarefa.className = "tarefa"
        tarefa.innerText = textoTarefa.value
        textoTarefa.value = ""
        listaTarefas.appendChild(tarefa)
    }
}
function apagarCompleto(){
    let completos = document.querySelectorAll(".completed")
    for (let i = 0; i < completos.length; i += 1) {selecionado.remove()}
}

function completaTarefa(){
    event.target.classList.toggle("completed")
    event.target.classList.add("selected")
}

function apagarSelecionado(){
    let selecionado = document.querySelector(".selected")
    selecionado.remove()
}
function apagarTudo(){
    let listaTarefas =document.querySelector("#lista-tarefas")
    listaTarefas.innerHTML = ""
}

function clicarTarefa(){
    if (event.target.classList.contains("selected")){limpaSelecionados()}
    else {limpaSelecionados(); event.target.classList.add("selected")}   
}
   
function limpaSelecionados(){
    let tarefas = document.querySelectorAll(".tarefa")
    for (let i of tarefas) {
        if (i.classList.contains("selected")){
            i.classList.remove("selected")}
    }
}

