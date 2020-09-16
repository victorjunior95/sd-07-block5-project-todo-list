window.onload = function () {
  let contaClick = 0;

  const tarefaInput = document.getElementById('texto-tarefa');
  const listaOrdenada = document.getElementById('lista-tarefas');

  tarefaInput.focus();

  listaOrdenada.addEventListener('click', function () {
    event.stopPropagation();
    const itemSelecionado = event.target;

    if (itemSelecionado.nodeName === 'LI') {
      limpaSeleao();
      alteraCorFundo(itemSelecionado);
    }
  })

  listaOrdenada.addEventListener('dblclick', function () {
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
    listaOrdenada.appendChild(novoLi);
    tarefaInput.value = '';
    tarefaInput.focus();
  }

  function alteraCorFundo(elem) {
    elem.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  document.getElementById('criar-tarefa').addEventListener('click', criaLi);

  document.getElementById('apaga-tudo').addEventListener('click', function(){
    const listaLi = document.querySelectorAll('ol>li');
    listaLi.forEach((item) => {
      item.remove();
    })
  });
}
