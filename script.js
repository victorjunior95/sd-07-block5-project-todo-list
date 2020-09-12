const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');


criaItem.addEventListener('click', function criaTarefa() {
  let itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  lista.appendChild(itemLista);
  textoTarefa.value = '';
})


apagarLista.addEventListener('click', function apagaLista(){
  const itensDaLista = document.querySelectorAll('li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    let remover = itensDaLista[i];
    lista.removeChild(remover);
  }
})