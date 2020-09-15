let btnAddList = document.getElementById('criar-tarefa');
let btnRemoveAll = document.getElementById('apaga-tudo');
let list = document.getElementById('lista-tarefas');
let inputList = document.getElementById('texto-tarefa');

function addToList(){
  console.log(inputList.value);
  let newItem = document.createElement('li');

  newItem.innerText = inputList.value;
  list.appendChild(newItem);

  inputList.value = '';
}

function removeAll(){
  let items = document.querySelectorAll('li');

  for(let i = 0; i < items.length; i += 1){
    list.removeChild(items[i]);
  }

}

btnAddList.addEventListener('click', addToList);
btnRemoveAll.addEventListener('click', removeAll);
