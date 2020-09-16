// Add a li in an ol and reset input text value;
const textInput = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
let orderedList = document.getElementById('lista-tarefas');

// addBtn.addEventListener('click', function () {
//     let elementLi = document.createElement('li');
//     elementLi.innerText = textInput.value;
//     orderedList.appendChild(elementLi);
    
//     textInput.value = ' ';
// });

function addTaskItem () {
    let elementLi = document.createElement('li');
    elementLi.innerText = textInput.value;
    orderedList.appendChild(elementLi);
}

function clearInput () {
    textInput.value = ' ';
}

addBtn.addEventListener('click', function () {
    addTaskItem();
    clearInput();
})


// let deleteAllBtn = document.getElementById('apaga-tudo');

// deleteAllBtn.addEventListener('click', function () {
//     for (let i = 0; i < orderedList.length; i += 1) {
//         orderedList[i].removeChild(elementLi);
//     }
//     })