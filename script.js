// Criar elemento na lista
function createListItem() {
  let list = document.querySelector('#lista-tarefas')
  let listItem = document.createElement('li');
  list.appendChild(listItem);
  listItem.className = 'tarefa';
  return listItem;
}

// Armazenar o texto escrito na lista
  let typedText = document.querySelector('#texto-tarefa');
  let taskButton = document.querySelector('#criar-tarefa');
function inputText() {
  let textListItem = createListItem();
  textListItem.innerText = typedText.value;
  typedText.value = '';
}

taskButton.addEventListener('click', inputText);
