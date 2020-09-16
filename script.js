//função para alterar o background de um item na lista quando clicado

function changeSelected(event) {
  let item = document.querySelectorAll('li');

  for (let i = 0; i < item.length;i += 1){
    if (item[i].classList.contains('selected')){
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
    }
  }

  event.target.classList.add('selected');
}

// função para riscar uma tarefa concluida

function checkList(event) {
  console.log("ola");

  if(event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
}

// função para criar items na lista puxando o valor do input

function createListItem(){
  let ordList = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let item = document.createElement('li');

  item.innerText = input.value;
  item.className = 'item';
  item.addEventListener('click', changeSelected);
  item.addEventListener('dblclick', checkList);

  ordList.appendChild(item);

  input.value = "";
}

let addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', createListItem);

// Função para apagar toda a lista

// // function clearAll() {
// //   let ol = document.getElementById('lista-tarefas');
// //   let childrenOl = ol.children;

// //   for(let indice = 0; indice < childrenOl.length; indice += 1){

// //   }

// //   }

// let clearButton = document.getElementById('apaga-tudo');

// clearButton.addEventListener('click', clearAll)
