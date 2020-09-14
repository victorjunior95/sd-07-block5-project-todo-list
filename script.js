let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let bntCriaTarefa = document.querySelector('#criar-tarefa')

function CriaItem(){
    let item = 0;
    let lista = [];
    lista[item] = document.createElement('li');
    lista[item].innerText = campoInsertTarefa.value;
    criarLista.appendChild(lista[item]);
    campoInsertTarefa.value = ""; 
    item ++;
}

bntCriaTarefa.addEventListener('click',CriaItem);
