window.onload = carregarTarefas

let textoTarefa = document.querySelector("#texto-tarefa")



let btnMoverCima = document.querySelector("#mover-cima")
btnMoverCima.addEventListener("click", moverCima)

let btnMoverBaixo = document.querySelector("#mover-baixo")
btnMoverBaixo.addEventListener("click", moverBaixo)

let btnSalvarTarefas = document.querySelector("#salvar-tarefas")
btnSalvarTarefas.addEventListener("click", salvarTarefas)

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

function apagarCompleto(){
    let tarefas = document.querySelectorAll(".tarefa")
    for (let i of tarefas) {
        if (i.classList.contains("completed")){
            i.remove("selected")}
    }    
}

function salvarTarefas(){
    let tarefas = document.querySelector("#lista-tarefas")
    localStorage.clear()
    localStorage.setItem("tarefas",tarefas.innerHTML)
}

function carregarTarefas(){
    if (localStorage.length > 0) {
        let tarefas = localStorage.getItem("tarefas")
        let listaTarefas = document.querySelector("#lista-tarefas")
        listaTarefas.innerHTML = tarefas
    }
}

/* function moverBaixo() {
    let selecionado = document.querySelector(".selected")
    if (selecionado.nextSibling != null) {
        selecionado.before(selecionado.nextSibling)
    }
}

function moverCima() {
    let selecionado = document.querySelector(".selected")
    if (selecionado.previousSibling != null) {
        selecionado.after(selecionado.previousSibling)
    }
} */

function moverBaixo() {
    let tarefas = document.querySelectorAll(".tarefa")
    let selecionado = document.querySelector(".selected")
    if (tarefas.length != 0) {
        if (selecionado != tarefas[tarefas.length-1]) {
            let atual = selecionado.innerHTML
            selecionado.innerHTML = selecionado.nextSibling.innerHTML
            selecionado.classList.remove("selected")
            selecionado.nextSibling.innerHTML = atual
            selecionado.nextSibling.classList.add("selected")
        }
    }
}

function moverCima() {
    let tarefas = document.querySelectorAll(".tarefa")
    if (tarefas.length != 0) {
        let selecionado = document.querySelector(".selected")
        if (selecionado != tarefas[0]) {
            let atual = selecionado.innerHTML
            selecionado.innerHTML = selecionado.previousSibling.innerHTML
            selecionado.classList.remove("selected")
            selecionado.previousSibling.innerHTML = atual
            selecionado.previousSibling.classList.add("selected")
        }
    }
}
    
