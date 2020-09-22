let buttonCreate = document.getElementById('criar-tarefa')
let inputTexto = document.getElementById('texto-tarefa')
let listaTarefa = document.getElementById('lista-tarefas')

buttonCreate.addEventListener('click', function() {
    if (inputTexto.value !== '') {
        let liTag = document.createElement('li')
        liTag.innerText = inputTexto.value
        listaTarefa.appendChild(liTag)
        inputTexto.value = ''
    }
    inputTexto.focus()
})