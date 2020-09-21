let inputLista = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let bttCriarTarefa = document.getElementById('criar-tarefa');

bttCriarTarefa.addEventListener('click', function () {
  if (inputLista.value) {
    let item = document.createElement('li');

    item.innerText = inputLista.value;

    listaTarefas.appendChild(item);

    inputLista.value = '';
  }

  inputLista.focus();
});

listaTarefas.addEventListener('click', function (event) {
  if (event.target.tagName == 'LI') {
    let allSelected = document.querySelector('.selected');
    if (allSelected !== null) {
      allSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

listaTarefas.addEventListener('dblclick', function (event) {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('completed');
  }
});

let btApagaTudo = document.getElementById('clearall-tarefa');
let btApagarFinalizadas = document.getElementById('clearok-tarefa');

btApagaTudo.addEventListener('click', function () {
  listaTarefas.innerHTML = '';
});

btApagarFinalizadas.addEventListener('click', function() {

// let item = document.getElementsByClassName('completed');
// for (i = (item.length - 1); i >= 0; i -= 1) {
//   item[i].remove()
// }



let item = document.querySelectorAll('.completed');
console.log(item.length)
for (i = 0; i < item.length ; i += 1) {
  item[i].remove()
}
})

// oque eu estava a fazer só

// btApagarFinalizadas.addEventListener('click', function (clearOk) {
//     if (clearOk.listaTarefas.querySelector('.completed')) {
//     let allCompleted = document.querySelector('.completed');
//     if (allCompleted) {
//       allSelected.classList.remove('completed');
//     }
//   }
// });