let btCriarTarefa = document.getElementById("criar-tarefa");
let inputTextoTarefa = document.getElementById("texto-tarefa");
let olListaTarefa = document.getElementById("lista-tarefas");

btCriarTarefa.addEventListener('click', function(){
    if(inputTextoTarefa.value){
        let liTag = document.createElement('li');
        liTag.innerText = inputTextoTarefa.value
        olListaTarefa.appendChild(liTag);
        inputTextoTarefa.value='';
    }
    inputTextoTarefa.focus(); 
});

olListaTarefa.addEventListener("click",function(event){
    let liSelected = document.querySelector(".selected")
    if(liSelected){
        liSelected.classList.remove('selected')
    }
    event.target.classList.add('selected')
})