function createListItem() {
    const item = document.createElement('li');
    const inputText = document.getElementById('texto-tarefa');
    const orderedList = document.getElementById('lista-tarefas');
    orderedList.appendChild(item);
    item.innerText = inputText.value;
}

let buttonAddItem = document.getElementById('criar-tarefa');
buttonAddItem.addEventListener('click', createListItem);