//criar a lista
let listaTarefas = document.querySelector('#lista-tarefas');
let criarTarefaBtn = document.querySelector('#criar-tarefa');
let allItens = '';
function criarLi () {
    criarTarefaBtn.addEventListener('click', function () {
        let criarLista = document.createElement('li');
        criarLista.innerText = document.querySelector('#texto-tarefa').value;
        listaTarefas.appendChild(criarLista);
        document.querySelector('#texto-tarefa').value = '';
        changeBackgroundColor()    
    });
}
function changeBackgroundColor() {
    allItens = document.querySelectorAll('li');    
    for (let i = 0; i < allItens.length; i += 1) {
        allItens[i].addEventListener('click', function () {
            if (allItens[i].style.backgroundColor === 'white') {
                allItens[i].style.backgroundColor = 'rgb(128,128,128)';
            }
            else {
                allItens[i].style.backgroundColor = 'white';
            }
        });
    }
}
criarLi();