const button = document.getElementById('criar-tarefa');
let entryText = document.getElementById('texto-tarefa');
button.addEventListener('click', function(){
    let list = document.getElementById('lista-tarefas');
    let item = document.createElement('li');
    item.innerText = entryText.value;
    entryText.value = '';
    list.appendChild(item);
})