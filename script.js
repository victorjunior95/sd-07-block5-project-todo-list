function selectLi(selectedLi) {
  document.querySelectorAll('li').forEach((li) => {
    if (selectedLi === li) {
      li.classList.toggle('li-clicked');
    } else if (li.classList.contains('li-clicked')) {
      li.classList.remove('li-clicked');
    }
  });
}
function addToDo() {
  const input = document.querySelector('#texto-tarefa');
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
  li.addEventListener('click', () => selectLi(li));
  li.addEventListener('dblclick', () => li.classList.toggle('completed'));
}

function clearList() {
  const list = document.querySelector('ol');
  document.querySelectorAll('li').forEach((listItem) => {
    list.removeChild(listItem);
  });
}

function removeFinished() {
  const list = document.querySelector('ol');
  document.querySelectorAll('li').forEach((listItem) => {
    if (listItem.classList.contains('completed')) {
      list.removeChild(listItem);
    }
  });
}

function initializeFunctions() {
  document.querySelector('#criar-tarefa').addEventListener('click', addToDo);
  document.querySelector('#apaga-tudo').addEventListener('click', clearList);
  document.querySelector('#remover-finalizados').addEventListener('click', removeFinished);
}

document.body.onload = initializeFunctions;
