function focusedItem(event) {
  const previousItem = document.getElementsByClassName('clicked');
  if (previousItem.length > 0) {
    previousItem[0].classList.remove('clicked');
  }
  const liItem = event.currentTarget;
  liItem.classList.add('clicked');
}

function markItem(event) {
  console.log(event.target.classList);
  const eventList = event.target.classList;
  for (let i = 0; i < eventList.length; i += 1) {
    if (eventList[i] === 'completed') {
      eventList.remove('completed');
      return;
    }
  }
  event.target.classList.add('completed');
}

function createListItem() {
  const item = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const orderedList = document.getElementById('lista-tarefas');
  orderedList.appendChild(item);
  item.innerText = inputText.value;
  inputText.value = '';
  item.addEventListener('click', focusedItem);
  item.addEventListener('dblclick', markItem);
}

function clearAllItems() {
  const liItems = document.getElementsByTagName('li');
  const orderedList = document.getElementById('lista-tarefas');
  const listLength = liItems.length;
  for (let i = 0; i < listLength; i += 1) {
    orderedList.removeChild(liItems[0]);
  }
}

function removeDone() {
  const selectedItem = document.getElementsByClassName('completed');
  const listLength = selectedItem.length;
  const orderedList = document.getElementById('lista-tarefas');
  for (let i = 0; i < listLength; i += 1) {
    orderedList.removeChild(selectedItem[0]);
  }
}

function removeSelected() {
  const orderedList = document.getElementById('lista-tarefas');
  const selectedItem = document.getElementsByClassName('clicked');
  orderedList.removeChild(selectedItem[0]);
}

function saveItems() {
  const liItems = document.getElementsByTagName('li');
  if (liItems.length === 0) {
    alert('Não há itens para salvar');
    return;
  }
  for (let i = 0; i < liItems.length; i += 1) {
    localStorage.setItem(i, [liItems[i].innerText , liItems[i].classList]);
  }
}

const buttonAddItem = document.getElementById('criar-tarefa');
buttonAddItem.addEventListener('click', createListItem);
const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearAllItems);
const removeDoneItem = document.getElementById('remover-finalizados');
removeDoneItem.addEventListener('click', removeDone);
const removeSelectedItem = document.getElementById('remover-selecionado');
removeSelectedItem.addEventListener('click', removeSelected);
const saveItemsButton = document.getElementById('salvar-tarefas');
saveItemsButton.addEventListener('click', saveItems);

// carrega os itens salvos no localStorage
if (localStorage.length > 0) {
  const orderedList = document.getElementById('lista-tarefas');
  for (let i = 0; i < localStorage.length; i += 1) {
    const currentStorage = localStorage.getItem(i).split(',');
    console.log(currentStorage);
    const localLi = document.createElement('li');
    localLi.innerText = currentStorage[0];
    localLi.classList = currentStorage[1];
    orderedList.appendChild(localLi);
    localLi.addEventListener('click', focusedItem);
    localLi.addEventListener('dblclick', markItem);
  }
}
