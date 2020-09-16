const listaTarefas = document.getElementById("lista-tarefas"); 
const textoTarefa = document.getElementById("texto-tarefa");
const btnCriarTarefa = document.getElementById("criar-tarefa");

btnCriarTarefa.addEventListener('click', function() {
    var item = '<li>' + textoTarefa.value + '</li>';
    listaTarefas.innerHTML += item;
    textoTarefa.value = '';
    textoTarefa.focus();
})

    
