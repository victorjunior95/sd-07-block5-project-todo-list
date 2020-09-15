let input = document.querySelector('#texto-tarefa');
let buttonAdicionar = document.querySelector('#criar-tarefa');
let listaOrdenada = document.querySelector('#lista-tarefas');

function adicionaItemLista() {
  let itemLista = criaItemLista('item');
  listaOrdenada.appendChild(itemLista);
  itemLista.innerHTML = input.value;
  input.value = '';
}

function criaItemLista(className) {
  let itemLista = document.createElement('li');
  itemLista.className = className;
  return itemLista;
}

buttonAdicionar.addEventListener('click', adicionaItemLista);

//-----------------------------------------------------------------//

document.addEventListener('click', function (event) {
  let items = document.querySelectorAll('.item');

  if (event.target.classList.contains('item')) {
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

//--------------------------------------------------------------------//

document.addEventListener('dblclick', function (event) {
  let items = document.querySelectorAll('.item');

  if (event.target.classList.contains('completed')) {
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.backgroundColor = 'white';
    }
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('item')) {
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.backgroundColor = 'white';
    }
    event.target.classList.add('completed');
  }
});

//------------------------------------------------------------------//

let buttonApagar = document.querySelector('#apaga-tudo');

function apagaItemsLista() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    listaOrdenada.removeChild(items[i]);
  }
}

buttonApagar.addEventListener('click', apagaItemsLista);
