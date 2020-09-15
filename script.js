let listaTarefas = document.getElementById('lista-tarefas');
let buttonAddTarefa = document.getElementById('criar-tarefa');

buttonAddTarefa.addEventListener('click', function (){
//Adicionando tarefas na lista
    let itemLista = document.createElement('li');
    itemLista.innerText = document.getElementById('texto-tarefa').value;
    listaTarefas.appendChild(itemLista);
//Adiciona cor ao elemento clicado   
    itemLista.addEventListener('click', function(event){
        let selectedItem = document.querySelector('.selected');
        if(selectedItem !== null){
        selectedItem.classList.remove('selected');
        }      
        event.target.classList.add('selected')
    });

    itemLista.addEventListener('dblclick', function(event){
        if(event.target.classList.contains('completed')){
            event.target.classList.remove('completed');
        } event.target.classList.add('completed')
    })
    document.getElementById('texto-tarefa').value ='';
});