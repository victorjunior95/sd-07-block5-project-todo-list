let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let bntCriaTarefa = document.querySelector('#criar-tarefa');
let classeItem = document.querySelectorAll('.itens');

function CriaItem(){
    let item = 0;
    let lista = [];
    lista[item] = document.createElement('li');
    lista[item].innerText = campoInsertTarefa.value;
    lista[item].className = 'itens';
    lista[item].style.backgroundColor = "rgb(255, 255,255 )";
    criarLista.appendChild(lista[item]);
    campoInsertTarefa.value = ""; 
    item ++;255
}

bntCriaTarefa.addEventListener('click',CriaItem);
