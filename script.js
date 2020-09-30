document.getElementById('criar-tarefa').addEventListener('click', () => {
  const itemLista = document.createElement('li');
  const caixaTexto = document.getElementById('texto-tarefa');
  let tarefa = document.getElementById('texto-tarefa').value;
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(itemLista).innerText = tarefa;
  caixaTexto.value = '';
})

document.getElementById('lista-tarefas').addEventListener('click', (event) => {
  const tarefas = document.getElementsByTagName('li');
  for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].style.backgroundColor = '';
  }
  const tarefaSelecionada = event.target;
  tarefaSelecionada.style.backgroundColor = 'rgb(128, 128, 128)'
})