let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let btnCriaTarefa = document.querySelector('#criar-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let btnFinalizados = document.querySelector('#remover-finalizados');
let classeItem = [];



function criaItem(){
    let item = 0;
    let lista = [];
    lista[item] = document.createElement('li');
    lista[item].innerText = campoInsertTarefa.value;
    lista[item].className = 'itens';
    criarLista.appendChild(lista[item]);
    campoInsertTarefa.value = ""; 
    classeItem = document.querySelectorAll('.itens');
    SelectComplet(lista[item]);
    itemAdciona(lista[item]);
    item ++;
}

btnCriaTarefa.addEventListener('click',criaItem);

// Apaga toda a lista

function limparLista(){
    if(classeItem.length != 0){
        for(let index = 0; index < classeItem.length ; index ++){
            criarLista.removeChild(classeItem[index]);
        };
    }
    else{
        alert('Não tem itens nessa lista');
    }
};

btnApagaTudo.addEventListener('click', limparLista);


// Marca como tarefa completa

function SelectComplet(item){
    item.addEventListener('dblclick',function(){
        item.classList.toggle('completed');
    });
};


// Marca item selecionado

function itemAdciona(item){
    item.addEventListener('click',function(){
        item.classList.toggle('selected');
    });
};

// Remove todos os

function removeFinalizados(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem[index].classList.contains('completed')){

            criarLista.removeChild(classeItem[index]);
        }
    };
};

btnFinalizados.addEventListener('click',removeFinalizados);

