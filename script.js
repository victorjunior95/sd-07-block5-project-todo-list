const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const criarTarefa = document.getElementById('criar-tarefa');
const deletarTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const completed = document.getElementsByClassName('completed');
const valInicial = 0;


function addTarefa() {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128';
}

function removerTudo() {
  do {
  listaTarefas.removeChild(tarefas[valInicial]);
  }
  while (valInicial < tarefas.length);
  }
  
  function removerFinal() {
  do {
  listaTarefas.removeChild(completed[valInicial]);
  }
  while (valInicial < completed.length);
  }
  
  function tarefaRealizada() {
  if (this.className === '') {
  this.className = 'completed';
  } else {
  this.className = '';
  }
  }

function addLista() {
  const listLine = document.createElement('li');
  listaTarefas.appendChild(listLine);
  listLine.addEventListener('click', addTarefa);
  listLine.addEventListener('dblclick', tarefaRealizada);
  listLine.innerText = textoTarefa.value;
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', addLista);
deletarTudo.addEventListener('click', removerTudo);
removerFinalizados.addEventListener('click', removerFinal);
