const addTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas')

addTarefa.addEventListener('click', function () {
    const elementLi = document.createElement('li');
    elementLi.innerText = inputTarefa.value;
    list.appendChild(elementLi);
    addColor()
    inputTarefa.value = ''
})

function addColor () {
    const item = document.querySelectorAll('li')
    item.forEach(key => {
        key.addEventListener('click', function () {
            key.style.backgroundColor = 'rgb(128 , 128 , 128)'
        })
})
}