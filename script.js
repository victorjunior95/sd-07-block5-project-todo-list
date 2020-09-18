window.onload = function () {
  const tarefaInput = document.getElementById('texto-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const avisos = document.getElementById('avisos');
  let itemClicado = null;
  carregaItensSalvos();
  tarefaInput.focus();

  const itemSelecionado = function (event) {
    event.stopPropagation();
    if (event.target.nodeName === 'LI') {
      limpaSeleao();
      alteraCorFundo(event.target);
      itemClicado = event.target;
    }
  }

  const moveParaBaixo = function () {
    avisos.textContent = '';
    let proximo = itemClicado.nextSibling;
    if (proximo != null) {
      listaDeTarefas.insertBefore(itemClicado, proximo);
      listaDeTarefas.insertBefore(proximo, itemClicado);
      salvarLista;
    } else {
      avisos.textContent = 'Fim da lista!';
    }
  }

  const moverParaCima = function () {
    avisos.textContent = '';
    let anterior = itemClicado.previousElementSibling;
    if (anterior != null) {
      listaDeTarefas.insertBefore(anterior, itemClicado);
      listaDeTarefas.insertBefore(itemClicado, anterior);
      salvarLista;
    } else {
      avisos.textContent = 'Fim da lista!';
    }
  }

  const marcarCompleto = function (event) {
    event.stopPropagation();
    if (event.target.nodeName === 'LI') {
      if (event.target.className === 'completed') {
        event.target.className = '';
      } else {
        event.target.className = 'completed';
      }
    }
    limpaSeleao();
  };

  /**Se criar uma variavel e atribuir a função não vai funcionar o desmarque quando marcar como compelto */
  function limpaSeleao() {
    let itensLista = document.querySelectorAll('ol>li');
    itensLista.forEach((element) => {
      itemClicado = null;
      element.style.backgroundColor = 'white';
    });
  }

  const criaLi = function () {
    let novoLi = document.createElement('li');
    novoLi.textContent = tarefaInput.value;
    listaDeTarefas.appendChild(novoLi);
    tarefaInput.value = '';
    tarefaInput.focus();
  }

  const alteraCorFundo = function (elem) {
    elem.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  const salvarLista = function () {
    localStorage.clear();
    localStorage.setItem('listaTarefas', listaDeTarefas.innerHTML);
  }

  /**Não consigo fazer essa função ser auto executavel. Por quê? */
  function carregaItensSalvos() {
    document.querySelector('ol').innerHTML = localStorage.getItem('listaTarefas');
  }

  document.getElementById('apaga-tudo').addEventListener('click', function () {
    const listaLi = document.querySelectorAll('ol>li');
    listaLi.forEach((item) => {
      item.remove();
    })
  });

  document.getElementById('remover-finalizados').addEventListener('click', function () {
    const itensCompletos = document.querySelectorAll('.completed');
    itensCompletos.forEach((item) => {
      item.remove();
    })
  });

  document.getElementById('remover-selecionado').addEventListener('click', function () {
    itemClicado.remove();
    salvarLista();
  });

  listaDeTarefas.addEventListener('click', itemSelecionado);
  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);
  listaDeTarefas.addEventListener('dblclick', marcarCompleto);
  document.getElementById('criar-tarefa').addEventListener('click', criaLi);
  document.getElementById('salvar-tarefas').addEventListener('click', salvarLista);
}
