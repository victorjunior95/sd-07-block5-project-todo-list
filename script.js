document.querySelector('#criar-tarefa').addEventListener('click', function newList() {
  let newLi = document.createElement('li');
  document.querySelector('ol').appendChild(newLi);
  newLi.innerText = document.querySelector('input').value;
  document.querySelector('input').value = '';

  newLi.addEventListener('click', function () {
    let selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    }
    newLi.classList.add('selected');
    })

  newLi.addEventListener('dblclick', function() {
    newLi.classList.toggle('completed');
  });
});


document.querySelector('#apaga-tudo').addEventListener('click', function deleteList() {
  let deleteOl = document.querySelector('#lista-tarefas');
  deleteOl.innerHTML = '';
});


document.querySelector('#remover-finalizados').addEventListener('click', function deleteCompleted() {
  let deleteLi = document.querySelector('#lista-tarefas');
  let completedLi = document.querySelectorAll('.completed');
    for (let index = 0; index < completedLi.length; index += 1) {
      deleteLi.removeChild(completedLi[index]);
    }
  });

document.querySelector('#remover-selecionado').addEventListener('click', function deleteSelected() {
  let deleteLi = document.querySelector('#lista-tarefas');
  let selectedLi = document.querySelectorAll('.selected');
    for (let index = 0; index < selectedLi.length; index += 1) {
      deleteLi.removeChild(selectedLi[index]);
    }
});


document.querySelector('#salvar-tarefas').addEventListener('click', function saveList() {
  let workList = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('saveList', workList);
});

function refresh() {
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('saveList');
}
window.onload = refresh;


// https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
document.querySelector('#mover-cima').addEventListener('click', function upItem() {
  let move = document.querySelector('#lista-tarefas');
  let item = document.querySelector('.selected');
  if (move.previousElementSibling) {
    move.insertBefore(item, item.previousElementSibling);
  }
});

document.querySelector('#mover-baixo').addEventListener('click', function downItem() {
  let move = document.querySelector('#lista-tarefas');
  let item = document.querySelector('.selected');
  if (move.nextElementSibling) {
    move.insertBefore(item.nextElementSibling, item);
  }
});
// ------------------------------------------------------------------------------------------------------------------
