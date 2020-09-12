const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');

criaItem.addEventListener('click', function criaTarefa() {
  let itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  lista.appendChild(itemLista);
  textoTarefa.value = '';
})