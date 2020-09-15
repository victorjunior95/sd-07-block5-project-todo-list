//Adicionando tarefas na lista
let listaTarefas = document.getElementById('lista-tarefas');
let buttonAddTarefa = document.getElementById('criar-tarefa');
buttonAddTarefa.addEventListener('click', function (){
    let itemLista = document.createElement('li');
    itemLista.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(itemLista);
});
//Adicionar cor ao item selecionado
