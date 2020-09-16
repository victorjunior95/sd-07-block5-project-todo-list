let criarTarefa = document.getElementById('criar-tarefa');
let toDos = document.getElementById('lista-tarefas').children;

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
  for (let toDo of toDos) {
    toDo.classList.remove('selected');
  }  
    itemLista.classList.add('selected');
  }); 
});











