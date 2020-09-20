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

function createListItem() {
  const ordList = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  const item = document.createElement('li');

  item.innerText = input.value;
  item.className = 'item';
  item.addEventListener('click', changeSelected);
  item.addEventListener('dblclick', checkList);

  ordList.appendChild(item);

  input.value = '';
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', createListItem);

//função para salvar todos os itens da lista para uma proxima sessão

  //função para salvar a lista

  function saveList() {
    localStorage.clear();

    let ol = document.getElementById("lista-tarefas");

    localStorage.setItem('itemList', ol.innerHTML);
  }

  let saveListButton = document.getElementById('salvar-tarefas');

  saveListButton.addEventListener('click', saveList);

  //função para puxar lista salva na ultima sessão

  function newSession() {
    let ol = document.getElementById("lista-tarefas");

    ol.innerHTML = localStorage.getItem('itemList');
  }

  window.onload = newSession;

// Função para apagar toda a lista

function clearAll() {
  let ol = document.getElementById("lista-tarefas");

    while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
  }

  //função baseada no site: https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
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
  let ol = document.getElementById('lista-tarefas');
  let selected = document.querySelector('.selected');

  ol.removeChild(selected);
}

let clearSelectedButton = document.getElementById('remover-selecionado');

clearSelectedButton.addEventListener('click', clearSelectedItem);

//função para mover o elemento selecionado para cima

function moveUp() {
  let lis = document.querySelectorAll('li');
  let selected = document.querySelector('.selected');
  let ol = document.getElementById('lista-tarefas');

  if (lis.length === 0 || selected === null) {
    alert ('É necessário adicionar tarefas ou selecionar uma tarefa!');
  } else if (selected.previousElementSibling === null) {
    alert ('Sua tarefa já está no topo da lista!');
  } else {
    ol.insertBefore(selected, selected.previousElementSibling);
  }
}

let moveUpButton = document.getElementById('mover-cima');

moveUpButton.addEventListener('click', moveUp);

//função para mover o elemento selecionado para baixo

function moveDown() {
  let lis = document.querySelectorAll('li');
  let selected = document.querySelector('.selected');
  let ol = document.getElementById('lista-tarefas');

  if (lis.length === 0 || selected === null) {
    alert ('É necessário adicionar tarefas ou selecionar uma tarefa!');
  } else if (selected.nextElementSibling === null) {
    alert ('Sua tarefa já está no fim da lista!');
  } else {
    ol.insertBefore(selected.nextElementSibling, selected);
  }
}

let moveDownButton = document.getElementById('mover-baixo');

moveDownButton.addEventListener('click', moveDown);

