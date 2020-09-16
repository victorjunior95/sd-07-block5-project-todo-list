window.onload = function () {
  const tarefaInput = document.getElementById('texto-tarefa');
  const listaDeTarefas = document.getElementById('lista-tarefas');
  const botaoSalvar = document.getElementById('salvar-tarefas');
  let atual = null;
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
      atual = itemSelecionado;
    }
  }

  document.getElementById('mover-baixo').addEventListener('click', moveParaBaixo);
  document.getElementById('mover-cima').addEventListener('click', moverParaCima);

  function moveParaBaixo() {
    let proximo = atual.nextSibling;
    if (proximo != null) {
      listaDeTarefas.insertBefore(atual, proximo);
      listaDeTarefas.insertBefore(proximo, atual);
    } else {
      alert('Fim da lista!');
    }
  }

  function moverParaCima(){
    let anterior = atual.previousElementSibling;
    if (anterior != null) {
      listaDeTarefas.insertBefore(anterior, atual);
      listaDeTarefas.insertBefore(atual, anterior);      
    } else {
      alert('Fim da lista!');
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


}
