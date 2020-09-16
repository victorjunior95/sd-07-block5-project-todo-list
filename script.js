// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

addBtn.addEventListener('click', function () {
    elementLi = document.createElement('li');
    elementLi.inneText = textInput.value;
    orderedList.appendChild(elementLi);
    
    textInput.value = ' ';
})
