let textoTarefa = document.getElementById('texto-tarefa');
const salvar = document.getElementById('criar-tarefa');

salvar.addEventListener('click', criarTarefa);

function criarTarefa() {
  if (textoTarefa.value === '') {
    return console.log('Campo vazio');
  }
  let lista = document.getElementById('lista-tarefas');
  let novoItem = document.createElement('li');
  novoItem.innerText = textoTarefa.value;
  lista.appendChild(novoItem);
  limparTexto();
  selecionarItem();
}

function limparTexto() {
  textoTarefa.value = '';
}

function descelecionarItem() {
  document.querySelectorAll('li').forEach((item) => {
    item.classList.remove('backgroundItemList');
    item.classList.remove('selecionado');
  });
}

function selecionarItem() {
  document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', () => {
      descelecionarItem();
      item.classList.add('backgroundItemList');
      item.classList.add('selecionado');
    });
    item.addEventListener('dblclick', () => {
      item.classList.add('completed');
      item.addEventListener('dblclick', () => {
        item.classList.remove('completed');
      });
    });
  });
}

let limparLista = document.getElementById('apaga-tudo');
limparLista.addEventListener('click', () => {
  document.querySelectorAll('li').forEach((item) => {
    item.remove();
  });
});

document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('.completed').forEach((item) => {
    item.remove();
  });
});

document.getElementById('remover-selecionado').addEventListener('click', () => {
  document.querySelectorAll('.selecionado').forEach((item) => {
    item.remove();
  });
});
