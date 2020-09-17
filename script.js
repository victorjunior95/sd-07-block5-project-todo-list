window.onload = function () {
  const tarefaInput = document.getElementById('texto-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoSalvar = document.getElementById('salvar-tarefas');
  const avisos = document.getElementById('avisos');
  let itemClicado = null;
  carregaItensSalvos();

  tarefaInput.focus();

  listaDeTarefas.addEventListener('click', itemSelecionado);

  function itemSelecionado() {
    event.stopPropagation();
    const itemSelecionado = event.target;
    console.log(itemSelecionado.innerHTML)

    if (itemSelecionado.nodeName === 'LI') {
      limpaSeleao();
      alteraCorFundo(itemSelecionado);
      itemClicado = itemSelecionado;
    }
  }

  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);

  function moveParaBaixo() {
    avisos.textContent = '';
    let proximo = itemClicado.nextSibling;
    if (proximo != null ) {
      listaDeTarefas.insertBefore(itemClicado, proximo);
      listaDeTarefas.insertBefore(proximo, itemClicado);
    } else {
      avisos.textContent = 'Fim da lista!';
    }
  }

  function moverParaCima(){
    avisos.textContent = '';
    let anterior = itemClicado.previousElementSibling;
    if (anterior != null) {
      listaDeTarefas.insertBefore(anterior, itemClicado);
      listaDeTarefas.insertBefore(itemClicado, anterior);      
    } else {
      avisos.textContent = 'Fim da lista!';
    }
  }

  listaDeTarefas.addEventListener('dblclick', function () {
    event.stopPropagation();
    const itemSelecionado = event.target;

    if (itemSelecionado.nodeName === 'LI') {
      if (itemSelecionado.className === 'completed') {
        itemSelecionado.className = '';
      } else {
        itemSelecionado.className = 'completed';
      }
    }
    limpaSeleao();
  });

  function limpaSeleao() {
    let itensLista = document.querySelectorAll('ol>li');
    itensLista.forEach((element) => {
      itemClicado = null;
      element.style.backgroundColor = 'white';
    });
  }

  function criaLi() {
    let novoLi = document.createElement('li');
    novoLi.textContent = tarefaInput.value;
    listaDeTarefas.appendChild(novoLi);
    tarefaInput.value = '';
    tarefaInput.focus();
  }

  function alteraCorFundo(elem) {
    elem.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  document.getElementById('criar-tarefa').addEventListener('click', criaLi);

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

  botaoSalvar.addEventListener('click', function () {
    localStorage.clear();
    localStorage.setItem('listaTarefas', listaDeTarefas.innerHTML);
  });

  function carregaItensSalvos() {
    document.querySelector('ol').innerHTML = localStorage.getItem('listaTarefas');
    console.log(botaoSalvar.innerHTML);
  }

  document.getElementById('remover-selecionado').addEventListener('click', function(){
    itemClicado.remove();
  });

}
