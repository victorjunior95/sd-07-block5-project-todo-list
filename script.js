const botaoApagar = document.querySelector('#apaga-tudo');
const botaoFinalizado = document.querySelector('#remover-finalizados');
const botaoTexto = document.querySelector('#criar-tarefa');
const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let itens = '';

botaoTexto.addEventListener('click', () => {
  const novoItem = document.createElement('li');

  novoItem.appendChild(document.createTextNode(caixaTexto.value));
  lista.appendChild(novoItem);
  caixaTexto.value = '';

  novoItem.addEventListener('click', () => {
    if (!novoItem.classList.contains('selected')) {
      itens = document.querySelectorAll('li');
      itens.forEach((item) => {
        item.classList.remove('selected');
      });

      novoItem.classList.add('selected');
    }
  });

  novoItem.addEventListener('dblclick', () => {
    if (novoItem.classList.contains('completed')) {
      novoItem.classList.remove('completed');
    } else {
      novoItem.classList.add('completed');
    }
  });
});

botaoApagar.addEventListener('click', () => {
  itens.forEach((item) => {
    lista.removeChild(item);
  });
});

botaoFinalizado.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('completed')) {
      lista.removeChild(item);
    }
  });
});
