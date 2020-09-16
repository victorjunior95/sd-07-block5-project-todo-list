// Restore information saved at local storage.
document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('saved');

const botaoAdd = document.getElementById('criar-tarefa');
const enter = document.getElementById('texto-tarefa');
// Function to add products with click.
function addProduct() {
  const lista = document.getElementById('lista-tarefas');
  const itensDigitados = document.getElementById('texto-tarefa');
  const liItensDigitados = document.createElement('li');
  liItensDigitados.innerText = itensDigitados.value;
  liItensDigitados.className = 'itens-list';
  lista.appendChild(liItensDigitados);
  itensDigitados.value = '';
  itensDigitados.focus();
}
// Call the function addProduct.
botaoAdd.addEventListener('click', addProduct);
// Function to add products with key Enter.
enter.addEventListener('keyup', function (enterAdd) {
  if (enterAdd.keyCode === 13) {
    addProduct();
  }
});
// Function to remove all itens list.
const botaoClear = document.getElementById('apaga-tudo');
function apagaTudo() {
  const lista = document.getElementById('lista-tarefas');
  while (lista.firstChild) {
  lista.removeChild(lista.lastChild);
}
  lista.innerHTML = '<h3>Itens Adicinados</h3>';
}
botaoClear.addEventListener('click', apagaTudo);
// Function to select indivudual item.
const itensList = document.querySelector('ol');
function selected(clickIten) {
  let itemList = document.querySelector('.selected');
  if (itemList !== null) {
    itemList.classList.remove('selected');
  }
  clickIten.target.classList.add('selected');
}
itensList.addEventListener('click', selected)
// Function to mark as completed.
itensList.addEventListener('dblclick', function (itensList) {
  if (itensList.target.tagName === 'LI') {
    itensList.target.classList.toggle('completed');
  }
});
// Function to remove finished item.
const removerFinalizados = document.querySelector('#remover-finalizados');
removerFinalizados.addEventListener('click', function () {
  const linhas = document.querySelectorAll('.completed');
  for (let count = 0; count < linhas.length; count += 1) {
    linhas[count].remove();
  }
});
// Function to remove completed item.
const removerSelecionado = document.querySelector('#remover-selecionado');
removerSelecionado.addEventListener('click', function () {
  const linhas = document.querySelectorAll('.selected');
  for (let count = 0; count < linhas.length; count += 1) {
  linhas[count].remove();
  }
});

const saveTask = document.getElementById('salvar-tarefas');
saveTask.addEventListener('click', function () {
  localStorage.setItem('saved', document.getElementById('lista-tarefas').innerHTML);
});
const automaticSave = function () {
  localStorage.setItem('saved', document.getElementById('lista-tarefas').innerHTML);
}
window.onchange = automaticSave;