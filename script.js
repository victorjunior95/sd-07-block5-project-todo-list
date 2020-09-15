window.onload=function(){

    let botaoAdicionar=document.getElementById('criar-tarefa');
    let novaTarefa=document.getElementById('texto-tarefa');
    let listaTarefas=document.getElementById('lista-tarefas');

    botaoAdicionar.addEventListener('click',function(){
        let tarefa=novaTarefa.value;
        adicionaTarefa(tarefa);
})

function adicionaTarefa(tarefa){
    let adicionaTarefa=document.createElement('li');
    adicionaTarefa.innerText=tarefa;
    listaTarefas.appendChild(adicionaTarefa);
    novaTarefa.value='';
}

}