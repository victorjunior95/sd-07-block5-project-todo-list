function inserirLi() {
  let minhaLista = document.getElementById('lista-tarefas');

  let novaLi = document.createElement('li');

  novaLi.innerHTML = document.getElementById('texto-tarefa').value;

  minhaLista.appendChild(novaLi);

  document.getElementById('texto-tarefa').value = '';
}
