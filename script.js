const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas')
const itenList = document.createElement('li');




criaTarefa.addEventListener('click', function(){ 
    if(textoTarefa.value !== ''){
        itenList.innerText = textoTarefa.value;
        listaTarefas.appendChild(itenList);
    }
});