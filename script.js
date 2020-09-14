const botaoTexto = document.querySelector('#criar-tarefa');
const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

botaoTexto.addEventListener('click', () => {
  const novoItem = document.createElement('li');

  novoItem.appendChild(document.createTextNode(caixaTexto.value));
  lista.appendChild(novoItem);
  caixaTexto.value = '';
});

lista.addEventListener('DOMNodeInserted', () => {
  const itens = document.querySelectorAll('li');
  itens.forEach((item) => {
    item.addEventListener('click', () => {
      removeLast();
      item.style.backgroundColor = 'rgb(128,128,128)';
    });
  });

  function removeLast() {
    itens.forEach((item) => {
      if (item.style.backgroundColor) {
        item.style.backgroundColor = '';
      }
    });
  }
});
