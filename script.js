const listaOrdenadaDeTarefas = document.getElementById('lista-tarefas');
const avisos = document.getElementById('avisos');

const criaTarefa = function () {
  const tarefaInput = document.getElementById('texto-tarefa');
  if (tarefaInput.value !== '') {
    avisos.innerText = '';
    let novaTarefa = document.createElement('li');

    novaTarefa.textContent = tarefaInput.value;

    listaOrdenadaDeTarefas.appendChild(novaTarefa);

    tarefaInput.value = '';

    tarefaInput.focus();
  } else {
    avisos.innerText = 'Favor descreva a tarefa antes de adicionar';
  }
}

const limpaSelecao = function () {
  let itensLista = document.querySelectorAll('ol>li');
  for (const item of itensLista) {
    if (item.className.indexOf('selected') != -1) {
      item.className = item.className.replace('selected', '');
    }
    item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  }
}

const selecionaItemLista = function (event) {
  const itemLista = event.target;
  if (itemLista.nodeName === 'LI') {
    limpaSelecao();
    itemLista.className += ' selected';
    itemLista.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

const limparSelecaoClickFora = function (event) {
  const item = event.target;
  if (item.nodeName !== 'LI' && item.nodeName !== 'BUTTON') {
    limpaSelecao();
  }
}

const marcarCompleto = function (event) {
  const item = event.target;
  event.stopPropagation();
  console.log('Nome da classe = ' + item.className)

  if (item.nodeName === 'LI') {
    console.log(item.className.indexOf('completed'))
    if (item.className.indexOf('completed') !== -1) {
      item.className = '';
      console.log('entrei')
    } else {
      item.className += ' completed';
    }
  }
  limpaSelecao();
};

const apagaTudo = function () {
  const listaLi = document.querySelectorAll('ol>li');
  listaLi.forEach((item) => {
    item.remove();
  })
}

const removerFinalizados = function () {
  const itensCompletos = document.querySelectorAll('.completed');
  itensCompletos.forEach((item) => {
    item.remove();
  })
}

const salvarLista = function () {
  localStorage.clear();
  localStorage.setItem('listaTarefas', listaOrdenadaDeTarefas.innerHTML);
}

// Não consigo fazer essa função ser auto executavel. Por quê?
const carregaItensSalvos = function () {
  document.querySelector('ol').innerHTML = localStorage.getItem('listaTarefas');
}

const moveParaBaixo = function () {
  avisos.textContent = '';
  const itemSelecionado = document.querySelectorAll('.selected')[0];
  let proximo = itemSelecionado.nextSibling;

  if (itemSelecionado !== null && proximo != null) {
    listaOrdenadaDeTarefas.insertBefore(itemSelecionado, proximo);
    listaOrdenadaDeTarefas.insertBefore(proximo, itemSelecionado);
    salvarLista();
  } else {
    avisos.textContent = 'Fim da lista!';
  }
}

const moverParaCima = function () {
  avisos.textContent = '';
  const itemSelecionado = document.querySelectorAll('.selected')[0];
  let anterior = itemSelecionado.previousElementSibling;

  console.log(anterior)
  if (anterior != null) {
    listaOrdenadaDeTarefas.insertBefore(anterior, itemSelecionado);
    listaOrdenadaDeTarefas.insertBefore(itemSelecionado, anterior);
    salvarLista();
  } else {
    avisos.textContent = 'Fim da lista!';
  }
}




window.onload = function () {
  carregaItensSalvos();

  document.addEventListener('click', limparSelecaoClickFora)
  document.getElementById('criar-tarefa').addEventListener('click', criaTarefa);
  listaOrdenadaDeTarefas.addEventListener('dblclick', marcarCompleto);
  listaOrdenadaDeTarefas.addEventListener('click', selecionaItemLista);
  document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
  document.getElementById('remover-finalizados').addEventListener('click', removerFinalizados);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);
}
