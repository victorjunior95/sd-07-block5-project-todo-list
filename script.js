let criarTarefa = document.getElementById('criar-tarefa');

// window.onload = renderizarTodos (); 

function renderizarTodos (novoToDo) {
  let listaTarefas = document.getElementById('lista-tarefas');
  let itemLista = document.createElement('li');
  listaTarefas.appendChild(itemLista)
  .setAttribute('class', 'todo');
  itemLista.innerText = novoToDo;
  return itemLista;
};

criarTarefa.addEventListener('click', function () {
  let campoToDo = document.querySelector('input');
  let outroToDo = campoToDo.value;
  campoToDo.value = '';
  let itemLista = renderizarTodos(outroToDo);
  
  itemLista.addEventListener('click', function () {
    itemLista.style.backgroundColor = 'rgb(128, 128, 128)';
  }); 
});











