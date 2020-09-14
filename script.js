let campoInsertTarefa = document.querySelector('#texto-tarefa');
let criarLista = document.querySelector('#lista-tarefas');
let btnCriaTarefa = document.querySelector('#criar-tarefa');
let btnApagaTudo = document.querySelector('#apaga-tudo');
let classeItem = [];

function criaItem(){
    let item = 0;
    let lista = [];
    lista[item] = document.createElement('li');
    lista[item].innerText = campoInsertTarefa.value;
    lista[item].className = 'itens';
    lista[item].style.backgroundColor = "rgb(255, 255,255)";
    criarLista.appendChild(lista[item]);
    campoInsertTarefa.value = ""; 
    item ++;
    classeItem = document.querySelectorAll('.itens');
    SelectComplet();
    itemTroca();
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

function itemTroca(){
    for(let index = 0; index < classeItem.length ; index ++){
           classeItem[index].addEventListener('click',function(){
               classeItem[index].backgroundColor = 'rgb(128,128,128)';
           });
       }
   };