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

let buttonAddItem = document.getElementById('criar-tarefa');
buttonAddItem.addEventListener('click', createListItem);
let clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearAllItems);
let removeDoneItem = document.getElementById('remover-finalizados');
removeDoneItem.addEventListener('click', removeDone);
let removeSelectedItem = document.getElementById('remover-selecionado');
removeSelectedItem.addEventListener('click', removeSelected);
