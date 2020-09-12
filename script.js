const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');


function selecionado() {
  this.classList.add('selected');
}

function concluido() {
  this.classList.remove('selected')
  this.classList.add('completed');
}

criaItem.addEventListener('click', function criaTarefa() {
  let itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.addEventListener('click', selecionado);
  itemLista.addEventListener('dblclick', concluido);
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

apagaFinalizados.addEventListener('click', function apagaConcluidos() {
  const concluidos = document.querySelectorAll('.completed');
  for(let j = 0; j < concluidos.length; j += 1){
    let concluidoRemovido = concluidos[j];
    lista.removeChild(concluidoRemovido);
  }
})