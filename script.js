let createTaskButton = document.getElementById("criar-tarefa");
let inputTaskText = document.getElementById("texto-tarefa");
let taskList = document.getElementById("lista-tarefas");


createTaskButton.addEventListener('click', function(){

if(inputTaskText.value !== ''){
    let listTag = document.createElement('li');
    listTag.innerText = inputTaskText.value;
    taskList.appendChild(listTag);
    inputTaskText.value= '';
 
}
    inputTaskText.focus();   
});

taskList.addEventListener('click',function(event){


      if(event.target.tagName == 'LI'){
  let allLi = document.querySelector('.selected'); 
    if(allLi != null)
   {
       allLi.classList.remove('selected');
   } else{
       event.target.classList.add('selected');}
   }
});

// adicionar dublo click 
taskList.addEventListener('dblclick', function(event){

    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('completed');
    }
});

// adiconar o botão de apagar

let btApagaTudo = document.getElementById('apaga-tudo');
let btRemoverFinalizados = document.getElementById('remover-finalizados');

btApagaTudo.addEventListener('click', function(){
    let newLine = document.querySelectorAll('li');
    for(let index = 0; index < newLine.length;  index += 1){
        newLine[index].remove();
    }
});