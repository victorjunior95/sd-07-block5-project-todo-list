let criarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let campoToDo = document.querySelector('input');

// window.onload = renderizarTodos (); 

function renderizarTodos (novoToDo) {
  let itemLista = document.createElement('li');
  listaTarefas.appendChild(itemLista)
  .setAttribute('class', 'todo');
  itemLista.innerText = novoToDo;
};

criarTarefa.addEventListener('click', function () {
  let outroToDo = campoToDo.value;
  campoToDo.value = '';
  renderizarTodos(outroToDo);
  let itemLista = document.querySelectorAll('li');
  
  for(let item of itemLista) {
    item.addEventListener('click', function () {
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    }); 
  };
});





