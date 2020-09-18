const inicioListaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

const butCriaTarefa = document.querySelector('#criar-tarefa');
const butApagaLista = document.querySelector('#apaga-tudo');
const butRemCompletos = document.querySelector('#remover-finalizados');
const butSalvaLista = document.querySelector('#salvar-tarefas');
const butMovAcima = document.querySelector('#mover-acima');
const butMovAbai = document.querySelector('#mover-abaixo');
const butRemSelecionado = document.querySelector('#remover-selecionado');

function levaParaLista() {
  let tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  inicioListaTarefas.appendChild(tarefa);
  textoTarefa.value = '';
}

function recriaLista() {
  for (let elemento = 0; elemento < localStorage.length; elemento += 1) {
    let starefa = localStorage.getItem(elemento);
    let tarefa = document.createElement('li');
    const objetoTarefa = JSON.parse(starefa);
    console.log(objetoTarefa);
    tarefa.innerText = objetoTarefa.task;
    if (objetoTarefa.status === 'completed') {
      tarefa.classList.toggle('completed');
    }
    inicioListaTarefas.appendChild(tarefa);
  }
}

function salvaLista() {
  localStorage.clear();
  const listaTarefas = document.querySelectorAll('li');
  for (let elemento = 0; elemento < listaTarefas.length; elemento += 1) {
    let situacao = '';
    if (listaTarefas[elemento].classList.contains('completed')) {
      situacao = 'completed';
    }
    const tarefa = {
      task: listaTarefas[elemento].innerText,
      status: situacao,
    };
    const starefa = JSON.stringify(tarefa);
    localStorage.setItem(elemento, starefa);
  }
}

function apagaLista() {
  localStorage.clear();
  inicioListaTarefas.innerHTML = 'Lista de Tarefas';
}

function selecao() {
  inicioListaTarefas.addEventListener('click', function (event) {
    let lista = document.getElementsByTagName('li');
    for (let index = 0; index < lista.length; index += 1) {
      if (lista[index].classList.contains('selected')) {
        lista[index].classList.toggle('selected');
      }
    }
    if (event.target !== inicioListaTarefas) {
      event.target.classList.toggle('selected');
    }
  });
}

function completos() {
  inicioListaTarefas.addEventListener('dblclick', function (event) {
    if (event.target !== inicioListaTarefas) {
      event.target.classList.toggle('completed');
    }
  });
}

function removeCompletos() {
  let lista = document.getElementsByTagName('li');
  for (let index = lista.length - 1; index >= 0; index -= 1) {
    if (lista[index].classList.contains('completed')) {
      inicioListaTarefas.removeChild(lista[index]);
    }
  }
}

function removeSelecionado() {
  let lista = document.querySelector('.selected');
  inicioListaTarefas.removeChild(lista);
}

function moveAcima() {
  let lista = document.querySelector('.selected');
  console.log(lista);
  if (lista !== null && lista !== inicioListaTarefas.firstChild.nextSibling) {
    inicioListaTarefas.insertBefore(lista, lista.previousSibling);
  }
}

function moveAbaixo() {
  let lista = document.querySelector('.selected');
  if (lista !== null && lista !== inicioListaTarefas.lastChild) {
    inicioListaTarefas.insertBefore(lista.nextSibling, lista);
  }
}

window.onload = function () {
  selecao();
  completos();
  recriaLista();
  butCriaTarefa.addEventListener('click', levaParaLista);
  butApagaLista.addEventListener('click', apagaLista);
  butRemCompletos.addEventListener('click', removeCompletos);
  butRemSelecionado.addEventListener('click', removeSelecionado);
  butSalvaLista.addEventListener('click', salvaLista);
  butMovAcima.addEventListener('click', moveAcima);
  butMovAbai.addEventListener('click', moveAbaixo);
};
