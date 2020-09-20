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