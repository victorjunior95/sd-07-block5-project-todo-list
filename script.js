//Adicionar lista de tarefas
const add = document.querySelector('#criar-tarefa');
add.addEventListener('click', function () {
  const itensList = document.createElement('li');
  const assignment = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  list.appendChild(itensList);
  itensList.innerText = assignment.value;
  assignment.value = '';
// Selecionar iten da lista
itensList.addEventListener('click', function () {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    itensList.classList.add('selected');
  });

  //Marca tarefa como completa!
itensList.addEventListener('dblclick', function () {
    if (itensList.classList.contains('completed')) {
      itensList.classList.remove('completed');
    } else {
      itensList.classList.add('completed');
    };
  });

  document.querySelector("#remover-selecionado").addEventListener('click', function () {
    if (itensList.classList.contains('selected')) {
      document.querySelector('ol').removeChild(itensList);
    };
  });
  });
  const save = document.querySelector('#salvar-tarefas');

save.addEventListener('click', function () {
  localStorage.clear();
   
  localStorage.setItem('Tarefas',  document.querySelector('#lista-tarefas').innerHTML);
});


  window.onload = Load;

function Load() {

  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('Tarefas');

};
//Remover tarefa completa!
const removed = document.querySelector('#remover-finalizados');
  removed.addEventListener('click', function () {
    const completed = document.querySelector('.completed');
    while (completed) {
      document.querySelector('ol').removeChild(completed);
    };
  });
//Apagar lista

const clear = document.querySelector('#apaga-tudo');
clear.addEventListener('click', function clearList() {
  const listAll = document.querySelector('ol');
  while (listAll.firstChild) {
    listAll.removeChild(listAll.firstChild);
  };
});


const down = document.querySelector('#mover-baixo');

down.addEventListener('click', function () {
  const listSelected = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  if (listSelected.length === 0 || selected === null) {
    alert('Selecione a tarefa');
  } else if (selected.nextElementSibling === null) {
    alert('Fim');
  } else {
    document.querySelector('ol').insertBefore(selected.nextElementSibling, selected)
  };



});

const up = document.querySelector('#mover-cima');
up.addEventListener('click', function () {
  const listSelected = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  if (listSelected.length === 0 || selected === null) {
    alert('Selecione uma tarefa');
  } else if (selected.previousElementSibling === null) {
    alert('Fim');
  } else {
    document.querySelector('ol').insertBefore(selected, selected.previousElementSibling)
  };

});







