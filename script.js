const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const apagar = document.querySelector('#apaga-tudo')
const apagarSelect = document.querySelector('#remover-finalizados')
const removerSelect = document.querySelector('#remover-selecionado')


addTarefa.addEventListener('click', function () {
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    elementLi.className = 'task';
    elementLi.classList.add('empty');
    list.appendChild(elementLi);
    addColor();
    completed();
    inputTarefa.value = ''
    emptyCheck();
})

apagar.addEventListener('click', function () {
    while(list.firstElementChild){
        list.removeChild(list.firstElementChild)
    }
})

apagarSelect.addEventListener('click', function () {
    const selected = document.querySelectorAll('.completed')
    selected.forEach(key => {
        key.remove()
    })

})
removerSelect.addEventListener('click', function () {
 const select = document.querySelector('.selected')
    select.remove()
})


function addColor () {
    const item = document.querySelectorAll('.empty')
    item.forEach(key => {
        key.addEventListener('click', function () {
            removeColor()
            key.classList.add('selected')
            key.style.backgroundColor = 'rgb(128 , 128 , 128)';
        })
})
}

function removeColor () {
    const item = document.querySelectorAll('.task')
    item.forEach(key => {
        key.classList.remove('selected')
        key.style.backgroundColor = 'white';
})
}

function completed () {

    let item = document.querySelectorAll('.empty')
    item.forEach(key => {
    key.addEventListener('dblclick', function addEvent () {
        key.classList.remove('empty')
        key.classList.add('completed');
        if(key.style.textDecoration == 'line-through solid black'){
            key.classList.remove('completed')
            key.style.textDecoration = 'none';
        }
        else {
            key.style.textDecoration = 'line-through solid black';
        }
        })
    })
}

function emptyCheck () {
    let item = document.querySelectorAll('.empty')
    if(document.querySelectorAll('.empty')){
        item.forEach(key =>{
            key.classList.remove('empty')
        })
    }
}
