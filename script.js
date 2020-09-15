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
  if (event.target.classList.contains('completed')) {
    event.target.style.backgroundColor = 'white';
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('item')) {
    event.target.style.backgroundColor = 'white';
    event.target.classList.add('completed');
  }
});

//------------------------------------------------------------------//

let buttonApagarTudo = document.querySelector('#apaga-tudo');

function apagaItemsLista() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    listaOrdenada.removeChild(items[i]);
  }
}
buttonApagarTudo.addEventListener('click', apagaItemsLista);

let buttonApagarSelecionados = document.querySelector('#remover-finalizados');

function apagaSelecionado() {
  let items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains('completed')) {
      listaOrdenada.removeChild(items[i]);
    }
  }
}
buttonApagarSelecionados.addEventListener('click', apagaSelecionado);
