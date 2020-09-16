// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
let orderedList = document.getElementById('lista-tarefas');

addBtn.addEventListener('click', function () {
    let elementLi = document.createElement('li');
    elementLi.innerText = textInput.value;
    orderedList.appendChild(elementLi);
    
    textInput.value = ' ';
});



// let deleteAllBtn = document.getElementById('apaga-tudo');

// deleteAllBtn.addEventListener('click', function () {
