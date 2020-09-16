const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

addTarefa.addEventListener('click', function () {
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    elementLi.className = 'task';
    list.appendChild(elementLi);
    addColor();
    inputTarefa.value = ''
})

function addColor () {
    const item = document.querySelectorAll('li')
    item.forEach(key => {
        key.addEventListener('click', function () {
            removeColor()
            key.style.backgroundColor = 'rgb(128 , 128 , 128)';
            completed ()
        })
})
}

function removeColor () {
    const item = document.querySelectorAll('.task')
    item.forEach(key => {
        key.style.backgroundColor = 'white';
})
}

function completed () {
    const item = document.querySelectorAll('.task')
    item.forEach(key =>{
    key.addEventListener('dblclick', function () {
        key.classList.add('completed');
        if(key.style.textDecoration == 'line-through'){
            key.classList.remove('completed')
            key.style.textDecoration = 'none';
        }
        else {
            key.style.textDecoration = 'line-through';
        }
        })
    })
}
