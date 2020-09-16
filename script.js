const lista = document.querySelector('#lista-tarefas');
const criaItem = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const moveParaBaixo = document.querySelector('#mover-baixo');
const moverParaCima = document.querySelector('#mover-cima');
const removerSelecionado = document.querySelector('#remover-selecionado');

moveParaBaixo.addEventListener('click', function () {
  const movido = document.querySelector('.selected');
  if (movido != null) {
    if(movido.nextElementSibling) {
      const baixo = movido.nextElementSibling;    
      movido.before(baixo);
    }
  }
})

moverParaCima.addEventListener('click', function () {
  const movido = document.querySelector('.selected');
  if (movido != null) {
    if(movido.previousElementSibling) {
      const cima = movido.previousElementSibling;   
      cima.before(movido);
    }
  }
})


function jaSelecionado() {
  const verificaSelecao = event.target;
  let jaFoiSelecionado = true;
  if (!verificaSelecao.classList.contains('selected')) {
    jaFoiSelecionado = false;
  }
  return jaFoiSelecionado;
}

function selecionado() {
  const itemAtual = jaSelecionado();
  const removerSelecao = document.querySelectorAll('li');
  for (let i = 0; i < removerSelecao.length; i += 1) {
    removerSelecao[i].classList.remove('selected');
  }
  if (!itemAtual) {
    this.classList.add('selected');
  } else {
    this.classList.remove('selected');
  }
}

function jaCompletado() {
  const verificaSelecao = event.target;
  let jaFoiConcluido = true;
  if (!verificaSelecao.classList.contains('completed')) {
    jaFoiConcluido = false;
  }
  return jaFoiConcluido;
}

function concluido() {
  const itemConcluido = jaCompletado();
  this.classList.remove('selected');
  if (!itemConcluido) {
    this.classList.add('completed');
  } else {
    this.classList.remove('completed');
  }
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

removerSelecionado.addEventListener('click', function (){
  const selecionado = document.querySelector('.selected');
  lista.removeChild(selecionado);
})