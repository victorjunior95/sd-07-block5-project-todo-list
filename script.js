const addTarefa = document.querySelector('#criar-tarefa');
const tarefaList = document.querySelector('#lista-tarefas');
const limparList = document.querySelector('#apaga-tudo');
const removeCompleted = document.querySelector('#remover-finalizados');
const removeSelected = document.querySelector('#remover-selecionado');
const moveUpBtn = document.querySelector('#move-up');
const moveDownBtn = document.querySelector('#move-down');
const saveList = document.querySelector('#salvar-tarefas')

saveList.addEventListener('click', function() {
  localStorage.clear();
  localStorage.setItem('tarefaList', tarefaList.innerHTML);
});

window.onload = loadSaveList();
function loadSaveList() {
  let savedList = localStorage.getItem('tarefaList');
  if (savedList !== null) {
    tarefaList.innerHTML = savedList;
  }
}

moveUpBtn.addEventListener('click', function () {
  const tSelected = document.querySelector('.t-selected');
  if ( tSelected !== null && tSelected.previousElementSibling !== null) {
    tarefaList.insertBefore(tSelected, tSelected.previousElementSibling);
  }
});

moveDownBtn.addEventListener('click', function () {
  const tSelected = document.querySelector('.t-selected');
  if (tSelected !== null && tSelected.nextElementSibling !== null) {
    tarefaList.insertBefore(tSelected.nextElementSibling, tSelected);
  }
});

function tSelect(a) {
  const newTarefa = a;
  newTarefa.addEventListener('click', function (select) {
    const color = newTarefa.style.backgroundColor;
    if (color === 'gray') {
      newTarefa.style.backgroundColor = null;
    } else {
      const tSelected = document.querySelector('.t-selected');
      select.target.className += ' t-selected';
      if (tSelected) {
        tSelected.classList.remove('t-selected');
      }
    }
  });
}

function tComplete(a) {
  const newTarefa = a;
  newTarefa.addEventListener('dblclick', function (select) {
    const decor = newTarefa.style.textDecoration;
    if (decor === 'ine-through solid black') {
      newTarefa.classList.remove('completed');
    } else {
      select.target.className += ' completed';
    }
  });
}

addTarefa.addEventListener('click', function () {
  const tarefaInput = document.querySelector('#texto-tarefa').value;
  const newTarefa = document.createElement('li');
  if (tarefaInput) {
    newTarefa.setAttribute('class', 'tarefa');
    newTarefa.innerHTML = tarefaInput;
    tarefaList.appendChild(newTarefa);
    document.querySelector('#texto-tarefa').value = '';
  }
  tSelect(newTarefa);
  tComplete(newTarefa);
});

limparList.addEventListener('click', function () {
  while (tarefaList.firstChild) {
    tarefaList.removeChild(tarefaList.firstChild);
  }
});

removeCompleted.addEventListener('click', function () {
  document.querySelectorAll('.completed').forEach(function (completed) {
    completed.remove();
  });
});

/* function removeCompleted() { !OUTRA FORMA DE ELIMINAR POR CLASS!
  const completedArray = document.getElementsByClassName("completed");
  while (completedArray.length > 0) elements[0].remove();
} */

removeSelected.addEventListener('click', function () {
  document.querySelector('.t-selected').remove()
})
