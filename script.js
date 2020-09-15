let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let btnCriaTarefa = document.querySelector('#criar-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let btnSelecionado = document.querySelector('#remover-selecionado');
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
    itemRemove(lista[item]);
    removeFinalizados(lista[item]);
    item ++;
}

btnCriaTarefa.addEventListener('click',criaItem);


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

function SelectComplet(item){
    item.addEventListener('dblclick',function(){
        item.classList.toggle('completed');
    });
};

function itemAdciona(item){
    item.addEventListener('click',function(){
        item.classList.toggle('selected');
    });
};

function itemRemove(item){
    if(item.classList.contains('selected')){
        item.addEventListener('click',function(){
            item.classList.remove('selected');
        });
    }
};

function removeFinalizados(item){
    if(item.classList.contains('completed')){
        item.addEventListener('click',function(){
            criarLista.removeChild(item);
        });
    }  
};

btnSelecionado.addEventListener('click',removeFinalizados);

