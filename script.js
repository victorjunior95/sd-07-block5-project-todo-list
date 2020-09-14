const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');

function jaSelecionado() {
  const verificaSelecao = event.target;
  let selecionado = true;
  if (!verificaSelecao.classList.contains('selected')) {
    selecionado = false;
  }
  return selecionado;
}
function selecionado() {
  const itemAtual = jaSelecionado();
  const removerSelecao = document.querySelectorAll('li');
  for (let i = 0; i < removerSelecao.length; i += 1) {    
    removerSelecao[i].classList.remove('selected');
  }
  if(!itemAtual) {
    this.classList.add('selected');
  } else {
    this.classList.remove('selected');
  }
}

function concluido() {
  this.classList.remove('selected');
  this.classList.add('completed');
}

criaItem.addEventListener('click', function criaTarefa() {
  const itemLista = document.createElement('li');
  itemLista.innerText = textoTarefa.value;
  itemLista.addEventListener('dblclick', concluido);
  itemLista.addEventListener('click', selecionado);
  lista.appendChild(itemLista);
  textoTarefa.value = '';
});

apagarLista.addEventListener('click', function apagaLista() {
  const itensDaLista = document.querySelectorAll('li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    const remover = itensDaLista[i];
    lista.removeChild(remover);
  }
});

apagaFinalizados.addEventListener('click', function apagaConcluidos() {
  const concluidos = document.querySelectorAll('.completed');
  for (let j = 0; j < concluidos.length; j += 1) {
    const concluidoRemovido = concluidos[j];
    lista.removeChild(concluidoRemovido);
  }
});
