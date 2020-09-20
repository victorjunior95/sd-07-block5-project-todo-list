let inputLista = document.getElementById("texto-tarefa");
let listaTarefas = document.getElementById("lista-tarefas");
let bttCriarTarefa = document.getElementById("criar-tarefa");

bttCriarTarefa.addEventListener('click', function () {

    if (inputLista.value) {

        let item = document.createElement('li');

        item.innerText = inputLista.value;

        listaTarefas.appendChild(item);

        inputLista.value = '';

    }

    inputLista.focus();
});

listaTarefas.addEventListener('click', function(event) {
    let allSelected = document.querySelector('.selected');
    if (allSelected !== null) {
       allSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
});




// listaTarefas.addEventListener( 'click', function (event){
//     if(document.querySelector('.selected')) {
//         document.querySelector('selected').classList,this.remove('selected')
//     }
//     event.target.classList.add('selected');
// });