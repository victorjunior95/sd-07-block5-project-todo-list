// criar a lista
const listaTarefas = document.querySelector('#lista-tarefas');
const criarTarefaBtn = document.querySelector('#criar-tarefa');
let itemSelect = '';
function criarLi() {
  criarTarefaBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = document.querySelector('#texto-tarefa').value;
    li.addEventListener('click', function () {
      itemSelect = document.querySelector('.selected');
      if (itemSelect != null) {
        itemSelect.classList.remove('selected');
      }
      li.classList.add('selected');
      itemSelect = li;
    });
    li.addEventListener('dblclick', function () {
      if (li.classList.contains('completed')) {
        li.classList.remove('completed');
      } else {
      li.classList.add('completed');
      }
    });
    listaTarefas.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  });
}
criarLi();
