let entradaTexto = document.querySelector('#texto-tarefa')
let botaoTarefa = document.querySelector("#criar-tarefa")
let listaTarefas = document.querySelector("#lista-tarefas")


botaoTarefa.addEventListener('click', function(){
    let novoElemento = document.createElement("li")
    novoElemento.innerHTML = entradaTexto.value
    listaTarefas.appendChild(novoElemento)  
    document.getElementById('texto-tarefa').value='';

})


// document.body.insertBefore(divNova, divAtual);