let buttonCreate = document.getElementById('criar-tarefa');

// 5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.   
function createItem(item) {
    let liItem = document.createElement('li');
    let list = document.getElementById('lista-tarefas');
    liItem.innerText = item;
    list.appendChild(liItem);
}

function addItem() {
    let input = document.getElementById('texto-tarefa');
    let newItem = input.value;
    createItem(newItem);
    input.value = '';
}

buttonCreate.addEventListener('click', addItem);

// 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

function addEventLastLi() {
    let lastLi = document.getElementById('lista-tarefas').lastChild;
    lastLi.addEventListener('click', function () {
        if (document.querySelector('.selected') !== null) {
            let selected = document.querySelector('.selected');
            selected.classList.remove('selected');
            lastLi.classList.add('selected');
        } else {
            lastLi.classList.add('selected');
        }
    })
}

buttonCreate.addEventListener('click', addEventLastLi);


