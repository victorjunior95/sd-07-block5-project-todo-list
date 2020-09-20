const listaOrdenadaDeTarefas = document.getElementById('lista-tarefas');
const avisos = document.getElementById('avisos');

const criaTarefa = function () {
  const tarefaInput = document.getElementById('texto-tarefa');
  if (tarefaInput.value !== '') {
    avisos.innerText = '';
    const novaTarefa = document.createElement('li');
    const textNode = document.createTextNode(tarefaInput.value);
    novaTarefa.appendChild(textNode);
    listaOrdenadaDeTarefas.appendChild(novaTarefa);

    tarefaInput.value = '';

    tarefaInput.focus();
  } else {
    avisos.innerText = 'Favor descreva a tarefa antes de adicionar';
  }
};

const limpaSelecao = function () {
  const itensLista = document.querySelectorAll('ol>li');
  itensLista.forEach((item) => {    
    !(item.classList.remove('selected')) && (item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)');
  });
};

const selecionaItemLista = function (event) {
  const itemLista = event.target;
  if (itemLista.nodeName === 'LI') {
    limpaSelecao();
    itemLista.classList.toggle('selected') && (itemLista.style.backgroundColor = 'rgb(128, 128, 128)');
  }
};

const limparSelecaoClickFora = function (event) {
  const item = event.target;
  if (item.nodeName !== 'LI' && item.nodeName !== 'BUTTON') {
    limpaSelecao();
  }
};

const salvarLista = function () {
  localStorage.clear();
  localStorage.setItem('listaTarefas', listaOrdenadaDeTarefas.innerHTML);
};

const marcarCompleto = function (event) {
  const item = event.target;
  event.stopPropagation();
  if (item.nodeName === 'LI') {
    item.classList.toggle('completed')
  }
  limpaSelecao();
  salvarLista();
};

const apagaTudo = function () {
  const listaLi = document.querySelectorAll('ol>li');
  listaLi.forEach((item) => {
    item.remove();
  });
  salvarLista();
};

(function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('listaTarefas');
})()

const moveParaBaixo = function () {
  avisos.textContent = '';
  const itemSelecionado = document.querySelectorAll('.selected')[0];
  const proximo = itemSelecionado.nextSibling;

  if (itemSelecionado !== null && proximo != null) {
    listaOrdenadaDeTarefas.insertBefore(proximo, itemSelecionado);
    salvarLista();
  } else {
    avisos.textContent = 'Fim da lista!';
  }
};

const moverParaCima = function () {
  avisos.textContent = '';
  const itemSelecionado = document.querySelectorAll('.selected')[0];
  const anterior = itemSelecionado.previousElementSibling;

  if (anterior != null) {
    listaOrdenadaDeTarefas.insertBefore(itemSelecionado, anterior);
    salvarLista();
  } else {
    avisos.textContent = 'Fim da lista!';
  }
};

const removerFinalizados = function () {
  const itensCompletos = document.querySelectorAll('.completed');
  itensCompletos.forEach((item) => {
    item.remove();
  });
  salvarLista();
};

const removerSelecionados = function () {
  const itenSelecionado = document.querySelectorAll('.selected')[0];
  itenSelecionado.remove();
  salvarLista();
};

window.onload = function () {
  document.addEventListener('click', limparSelecaoClickFora);
  document.getElementById('criar-tarefa').addEventListener('click', criaTarefa);
  listaOrdenadaDeTarefas.addEventListener('dblclick', marcarCompleto);
  listaOrdenadaDeTarefas.addEventListener('click', selecionaItemLista);
  document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);
  document.getElementById('remover-finalizados').addEventListener('click', removerFinalizados);
  document.getElementById('remover-selecionado').addEventListener('click', removerSelecionados);
};
