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
            let itemSelect = document.querySelector('.selected');
            if (itemSelect == null) {
                allItens[i].classList.add('selected');
                console.log('estou aqui')
            }
            else {
                if (itemSelect != allItens[i]) {
                    itemSelect.classList.remove('selected');
                    allItens[i].classList.add('selected');
                    console.log('estou aqui2');
                }
            }     
        });
    }
}
criarLi();