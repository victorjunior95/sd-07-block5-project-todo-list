// Seleciona elemento da lista
function selectionListItem(event) {
  const selectedItem = event.target;
  const liSelected = document.querySelector('.turn-gray');
  
  selectedItem.classList.add('turn-gray');
  liSelected.classList.remove('turn-gray'); 
}

// Criar elemento na lista
const list = document.querySelector('#lista-tarefas');

function createListItem() {
  const listItem = document.createElement('li');
  list.appendChild(listItem);
  listItem.className = 'tarefa';
  listItem.addEventListener('click', selectionListItem);
  // listItem.addEventListener('dblclick', )
  
  return listItem;
}

// Armazenar o texto escrito na lista
const typedText = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');

function inputText() {
  const textListItem = createListItem();
  textListItem.innerText = typedText.value;
  typedText.value = '';
}

taskButton.addEventListener('click', inputText);

// Apaga itens da lista
const clearButton = document.querySelector('#apaga-tudo');

function removeListItem() {
  list.innerHTML = '';
}

clearButton.addEventListener('click', removeListItem);
