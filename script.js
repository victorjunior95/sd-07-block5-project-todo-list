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
    item ++;
    classeItem = document.querySelectorAll('.itens');
    SelectComplet();
    itemAdciona();
    itemRemove();
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

function SelectComplet(){
 for(let index = 0; index < classeItem.length ; index ++){
        classeItem[index].addEventListener('dblclick',function(){
            classeItem[index].classList.toggle('completed');
        });
    }
};

function itemAdciona(){
    for(let index = 0; index < classeItem.length ; index ++){
        classeItem[index].addEventListener('click',function(){
            classeItem[index].classList.toggle('selected');
        });
    }
};

function itemRemove(){
    for(let index = 0; index < classeItem.length ; index ++){
        if(classeItem[index].classList.contains('selected')){
            classeItem[index].addEventListener('click',function(){
            classeItem[index].classList.remove('selected');
            });
            console.log(fundoColor)
        }
    }
};

function removeFinalizados(){
    let lista = [];
    if(classeItem[index].classList.contains('completed')){

        for(let index = 0; index < classeItem.length ; index ++){
            classeItem[index].addEventListener('click',function(){
                    lista[index] =  classeItem[index];
            });
        }
    }
    
    criarLista.removeChild(lista[index]);
};

btnSelecionado.addEventListener('click',removeFinalizados);

