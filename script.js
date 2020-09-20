//função para alterar o background de um item na lista quando clicado

function changeSelected(event) {
  let item = document.querySelectorAll('li');

  for (let i = 0; i < item.length;i += 1){
    if (item[i].classList.contains('selected')){
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

// função para riscar uma tarefa concluida

function checkList(event) {
  console.log("ola");

  if(event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
}

// função para criar items na lista puxando o valor do input

function createListItem(){
  let ordList = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let item = document.createElement('li');

  item.innerText = input.value;
  item.className = 'item';
  item.addEventListener('click', changeSelected);
  item.addEventListener('dblclick', checkList);

  ordList.appendChild(item);

  input.value = "";
}

let addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', createListItem);

// Função para apagar toda a lista

function clearAll() {
  let ol = document.getElementById("lista-tarefas");

  //ideia baseada no site: https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
  while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
  }
}

let clearButton = document.getElementById('apaga-tudo');

clearButton.addEventListener('click', clearAll)

//Função para apagar somente tarefas concluidas

function clearCompletedList(){
  let ol = document.getElementById("lista-tarefas");
  let completed = document.querySelectorAll('.completed');

  let index = 0;

  while(index < completed.length){
    ol.removeChild(completed[index]);
    index += 1;
  }
}

let completedListButton = document.getElementById('remover-finalizados');

completedListButton.addEventListener('click', clearCompletedList);

// função para apagar somente elemento selecionado

function clearSelectedItem() {
  let ol = document.getElementById("lista-tarefas");
  let selected = document.querySelector('.selected');

  ol.removeChild(selected);
}

let clearSelectedButton = document.getElementById('remover-selecionado');

clearSelectedButton.addEventListener('click', clearSelectedItem)
