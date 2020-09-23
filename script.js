const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefas = document.getElementsByTagName('li');
const criarTarefa = document.getElementById('criar-tarefa');


function addTarefa() {
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128';
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
