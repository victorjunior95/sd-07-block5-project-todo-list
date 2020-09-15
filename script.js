const btnCriarTarefa = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
btnCriarTarefa.addEventListener('click', function () {
    let textInput = document.querySelector('#texto-tarefa').value;
    let listItem = document.createElement('li');
    listItem.className = 'listItem';
    listItem.innerHTML = textInput;
    toDoList.appendChild(listItem);
    document.querySelector('#texto-tarefa').value = '';
});