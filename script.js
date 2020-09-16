// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

addBtn.addEventListener('click', function () {
    let elementLi = document.createElement('li');
    elementLi.innerHTML = textInput.value;
    orderedList.appendChild(elementLi);
    
    textInput.value = ' ';
});


// Button to delele all items from the list;
const deleteAllBtn = document.getElementById('apaga-tudo');
