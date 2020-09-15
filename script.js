function createListItem(){
  let ordList = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let listItems = [];
  let item = document.createElement('li');

  item.innerText = input.value;

  ordList.appendChild(item);

  input = "";
}

let addButton = document.getElementById('criar-tarefa');

addButton.addEventListener('click', createListItem);

