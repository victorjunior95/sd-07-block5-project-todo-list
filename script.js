window.onload = storage;

document.getElementById('criar-tarefa').addEventListener('click', () => {
  const itemLista = document.createElement('li');
  const caixaTexto = document.getElementById('texto-tarefa');
  let tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(itemLista).innerText = tarefa;
  caixaTexto.value = '';
  caixaTexto.focus();
})

document.getElementById('lista-tarefas').addEventListener('click', (event) => {
  const tarefas = document.getElementsByTagName('li');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = '';
    tarefas[i].classList.remove('selected');
  }
  const tarefaSelecionada = event.target;
  tarefaSelecionada.style.backgroundColor = 'rgb(128, 128, 128)';
  tarefaSelecionada.classList.add('selected');
})

document.getElementById('lista-tarefas').addEventListener('dblclick', (event) => {
  const tarefaSelecionada = event.target;

  if (tarefaSelecionada.classList.contains('completed')) {
    tarefaSelecionada.style.textDecoration = 'none';
    tarefaSelecionada.classList.remove('completed');
  }
  else {
    tarefaSelecionada.classList.add('completed');
    tarefaSelecionada.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
})

document.getElementById('apaga-tudo').addEventListener('click', () => {
  const lista = document.getElementById('lista-tarefas');
  lista.innerHTML = '';
})

document.getElementById('remover-finalizados').addEventListener('click', () => {
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
    let tarefa = tarefasFinalizadas[i];
    tarefa.remove();
  }
})

document.getElementById('remover-selecionado').addEventListener('click', () => {
  let tarefaSelecionada = document.querySelector('.selected');
  tarefaSelecionada.remove();
})

document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.clear();
  let listaSalva = document.getElementById('lista-tarefas');
  localStorage.setItem('List', listaSalva.innerHTML);
})

function storage() {
  const ol = document.getElementsByTagName('ol');
  let listaSalva = localStorage.getItem('List');
  ol.innerHTML = listaSalva;
}
