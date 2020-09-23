let textoTarefa = document.getElementById('texto-tarefa').value;
let botaoAdicionar = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let itensLista = document.getElementsByClassName('selecionado');
let itensCompletados = document.getElementsByClassName('completed');
let botaoLimpar = document.getElementById('apaga-tudo');
let botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoAdicionar.addEventListener('click', function () {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  let elementoLista = document.createElement('li');
  elementoLista.innerHTML= textoTarefa;
  elementoLista.classList.add('item');
  listaTarefas.appendChild(elementoLista);
  document.getElementById('texto-tarefa').value = "";
  elementoLista.addEventListener('click', function () {
    if (itensLista.length > 0) {
      for (index = 0; index < itensLista.length; index += 1) {
        itensLista[index].classList.remove('selecionado')};
    }
    elementoLista.classList.add('selecionado');
  });
  elementoLista.addEventListener('dblclick', function () {
    elementoLista.classList.toggle('completed');
  });
});

botaoLimpar.addEventListener('click', function () {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  };
});

botaoRemoverFinalizados.addEventListener('click', function () {
  let item = document.querySelectorAll('.completed');
  for (let index = 0; index < item.length; index += 1) {
    item[index].remove();
  };
});



