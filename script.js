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

let buttonCreate = document.getElementById('criar-tarefa');
buttonCreate.addEventListener('click', addItem);

// 7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).    
let items = document.querySelectorAll('li');
for (index = 0; index < items.length; index += 1) {
    let item = items[index];
    item.addEventListener('click', function () {
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    })
}