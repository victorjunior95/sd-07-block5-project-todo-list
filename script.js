let btnAddList = document.getElementById('criar-tarefa');
let btnRemoveAll = document.getElementById('apaga-tudo');
let list = document.getElementById('lista-tarefas');
let inputList = document.getElementById('texto-tarefa');

function addToList(){
  console.log(inputList.value);
  let newItem = document.createElement('li');

  newItem.innerText = inputList.value;
  newItem.className = 'item';
  list.appendChild(newItem);

  newItem.addEventListener('click', doneItem);

  inputList.value = '';
}

function removeAll(){
  let items = document.querySelectorAll('li');

  for(let i = 0; i < items.length; i += 1){
    list.removeChild(items[i]);
  }

}

function doneItem(e){

  let itemDone = e.srcElement;

  let itemPreviousSelected = document.querySelector('.done');

  if(itemDone ===  itemPreviousSelected){
    itemPreviousSelected.classList.remove('done');
    return;
  }

  if(itemPreviousSelected === null){
    itemDone.className += ' done';
  }else{
    itemPreviousSelected.classList.remove('done');
    itemDone.className += ' done';
  }

}

btnAddList.addEventListener('click', addToList);
btnRemoveAll.addEventListener('click', removeAll);
