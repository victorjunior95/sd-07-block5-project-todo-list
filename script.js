const inicioListaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

const butCriaTarefa = document.querySelector('#criar-tarefa')
const butApagaLista = document.querySelector('#apaga-tudo')
const butRemCompletos = document.querySelector('#remover-finalizados')
const butSalvaLista = document.querySelector('#salvar-tarefas')
const butMovAcima =document.querySelector('#mover-acima')
const butMovAbai =document.querySelector('#mover-abaixo')



let ultimoSelecionado = [];

window.onload = function() {
    selecao();
    completos();
    recriaLista();
    butCriaTarefa.addEventListener('click', levaParaLista);
    butApagaLista.addEventListener('click', apagaLista);
    butRemCompletos.addEventListener('click', removeCompletos);
    butSalvaLista.addEventListener('click', salvaLista);
    butMovAcima.addEventListener('click', moveAcima);
    butMovAbai.addEventListener('click', moveAbaixo);
};

function levaParaLista() {
    let tarefa = document.createElement('li');
    tarefa.innerText = textoTarefa.value;
    inicioListaTarefas.appendChild(tarefa);
    textoTarefa.value = '';
}

function recriaLista() {
    for (itemLista = 0; itemLista < localStorage.length; itemLista += 1) {
        let tarefa = document.createElement('li');
        tarefa.innerText = localStorage.getItem(itemLista);
        inicioListaTarefas.appendChild(tarefa);
    }
}

function salvaLista() {
    let key = 0;
    document.querySelectorAll('li').forEach(element => {
        localStorage.setItem(key, element.innerText);
        key += 1;
    });
}

function apagaLista() {
    localStorage.clear();
    inicioListaTarefas.innerHTML = 'Lista de Tarefas';
}

function selecao() {
    inicioListaTarefas.addEventListener('click', function(event) {
        let lista = document.getElementsByTagName('li')
        for (index = 0; index < lista.length; index += 1) {
            if (lista[index].classList.contains('selected')) {
                lista[index].classList.toggle('selected');
            }
        }
        if(event.target !== inicioListaTarefas) {
        event.target.classList.toggle('selected');        
        }
    });
}

function completos() {
    inicioListaTarefas.addEventListener('dblclick', function(event) {
        event.target.classList.toggle('completed');
    });
}

function removeCompletos () {
    let lista = document.getElementsByTagName('li')
    for (index = lista.length - 1; index >= 0 ; index -= 1) {
        if (lista[index].classList.contains('completed')) {
            inicioListaTarefas.removeChild(lista[index]);
        }
    }
}

function moveAcima () {
    let lista = document.querySelector('.selected')
    if (lista !== inicioListaTarefas.firstChild.nextSibling) {
        inicioListaTarefas.insertBefore(lista, lista.previousSibling);
    }
}

function moveAbaixo () {
    let lista = document.querySelector('.selected')
    if (lista !== inicioListaTarefas.lastChild) {
        inicioListaTarefas.insertBefore(lista.nextSibling, lista);
    }
}
