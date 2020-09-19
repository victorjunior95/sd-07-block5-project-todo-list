const createButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

createButton.addEventListener('click', function() {
    const newLine = document.createElement('li');
    list.appendChild(newLine);
    newLine.innerHTML = document.querySelector('input').value; // add nova tarefa
    document.querySelector('input').value = ''; // apaga texto do input
});

const deleteAllButton = document.getElementById('apaga-tudo');
deleteAllButton.addEventListener('click', function() {
    list.innerText = '';
});

// seleciona
// list.addEventListener('click', function(event) {
//     const lastSelectedElement = document.getElementsByClassName('selected');
//     lastSelectedElement.classList.remove('selected');
//     lastSelectedElement.style.backgroundColor = '';
//     const selected = event.target;
//     selected.classList.add("selected");
//     selected.style.backgroundColor = "rgb(128 , 128 , 128)";
// });

// marca como concluída
list.addEventListener('dblclick', function(event) {
    if(event.target.className == 'completed') {
        event.target.classList.remove('completed');
    } else {
        const completed = event.target;
        completed.classList.add('completed');
    }
});
