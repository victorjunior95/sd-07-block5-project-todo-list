const botaoApagar = document.querySelector('#apaga-tudo');
const botaoSalvar = document.querySelector('#salvar-tarefas');
const botaoTexto = document.querySelector('#criar-tarefa');
const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const removerFinalizado = document.querySelector('#remover-finalizados');
const removerSelecionado = document.querySelector('#remover-selecionado');
const paraCima = document.querySelector('#mover-cima');
const paraBaixo = document.querySelector('#mover-baixo');
let itens = document.querySelectorAll('li');

botaoTexto.addEventListener('click', () => {
  novoItemLista(caixaTexto.value);
  caixaTexto.value = '';
});

window.addEventListener('load', () => {
  if (localStorage.getItem('listagem') !== null) {
    const arrayLista = localStorage.getItem('listagem').split(',');
    arrayLista.forEach((item) => {
      novoItemLista(item);
    });
  }
});

botaoSalvar.addEventListener('click', () => {
  const arrayLista = [];
  itens.forEach((item) => {
    arrayLista.push(item.innerHTML);
  });
  localStorage.setItem('listagem', arrayLista);
});

removerSelecionado.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      lista.removeChild(item);
    }
  });
});

removerFinalizado.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('completed')) {
      lista.removeChild(item);
    }
  });
});

botaoApagar.addEventListener('click', () => {
  itens.forEach((item) => {
    lista.removeChild(item);
  });
});

paraCima.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      let parentes = item.parentNode;
      let acima = item.previousElementSibling;
      parentes.insertBefore(item, acima);
    }
  });
});

paraBaixo.addEventListener('click', () => {
  itens.forEach((item) => {
    if (item.classList.contains('selected')) {
      let parentes = item.parentNode;
      let abaixo = item.nextElementSibling;
      parentes.insertBefore(abaixo, item);
    }
  });
});

function novoItemLista(texto) {
  const novoItem = document.createElement('li');
  const textoParaLista = document.createTextNode(texto);

  novoItem.appendChild(textoParaLista);
  lista.appendChild(novoItem);
  itens = document.querySelectorAll('li');

  novoItemClick(novoItem);
  novoItemDoubleClick(novoItem);
}

function novoItemClick(novoItem) {
  novoItem.addEventListener('click', () => {
    if (!novoItem.classList.contains('selected')) {
      itens.forEach((item) => {
        item.classList.remove('selected');
      });
      novoItem.classList.add('selected');
    }
  });
}

function novoItemDoubleClick(novoItem) {
  novoItem.addEventListener('dblclick', () => {
    if (novoItem.classList.contains('completed')) {
      novoItem.classList.remove('completed');
    } else {
      novoItem.classList.add('completed');
    }
  });
}
