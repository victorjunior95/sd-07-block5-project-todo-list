let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let bntCriaTarefa = document.querySelector('#criar-tarefa')
let lista = document.createElement('li');

function CriaItem(){
    lista.innerText = campoInsertTarefa.value;
    criarLista.appendChild(lista);
    campoInsertTarefa.value = ""; 
}

bntCriaTarefa.addEventListener('click',CriaItem);
