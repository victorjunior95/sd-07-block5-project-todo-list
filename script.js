function createItem(item) {
    let liItem = document.createElement('li');
    let list = document.getElementById('lista-tarefas');
    liItem.innerText = item;
    list.appendChild(liItem);
}

function addItem() {
    let input = document.getElementById('texto-tarefa').value;
    let newItem = input;
    createItem(newItem);
}

let buttonCreate = document.getElementById('criar-tarefa');
buttonCreate.addEventListener('click', addItem);