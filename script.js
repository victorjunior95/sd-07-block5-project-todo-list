let botaoCriarTarefa = document.getElementById('criar-tarefa');
let botaoApagaTudo = document.getElementById('apaga-tudo');
let botaoRemoverFinalizados = document.getElementById('remover-finalizados');
let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
let inputTarefa = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let textoInput = document.getElementById('texto-tarefa')


function criarTarefa() {
    let tarefa = document.createElement('li');
    tarefa.innerText = inputTarefa.value;
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = "";
}

function selecaoTarefa() {

}

function apagaTudo() {

}

function removerFinalizados() {

}

function salvarTarefas() {

}

function limpaTexto() {

}