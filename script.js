function focusedItem(event) {
  let liItem = event.currentTarget;
  liItem.classList.add('clicked');
}

function createListItem() {
  const item = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const orderedList = document.getElementById('lista-tarefas');
  orderedList.appendChild(item);
  item.innerText = inputText.value;
  item.addEventListener('click', focusedItem);
}

let buttonAddItem = document.getElementById('criar-tarefa');
buttonAddItem.addEventListener('click', createListItem);
