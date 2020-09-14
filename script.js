const list = document.getElementById('lista-tarefas');
let listaCompleta;

function addElement() {
  const textInput = document.getElementById('texto-tarefa');
  const tarefaDigitada = textInput.value;
  const elementList = document.createElement('li');
  list.appendChild(elementList).classList = 'item-list';
  elementList.textContent = tarefaDigitada;
  textInput.value = '';

  let itensList = document.querySelectorAll('.item-list');
for (let index = 0; index < itensList.length; index += 1){
let itemSelecionado = itensList[index];
itemSelecionado.addEventListener('click', function(){
    for (let index = 0; index < itensList.length; index += 1){
      let apagaCor = itensList[index];
      apagaCor.style.backgroundColor = ''; 
    }
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
});  
}


}

const buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', addElement);


