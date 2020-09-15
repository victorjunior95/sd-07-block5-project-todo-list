let inputText = document.getElementById("texto-tarefa")
let list = document.getElementById("lista-tarefas")
let button = document.getElementById("criar-tarefa")

button.addEventListener("click", function() {
    let novoTodo = document.createElement('li')
    novoTodo.innerHTML = inputText.value
    list.appendChild(novoTodo)
    inputText.value = ""
    inputText.focus()
    novoTodo.addEventListener("click", function() {    
        const previousItem = document.getElementsByClassName('selected');
        if (previousItem.length > 0) {
        previousItem[0].classList.remove('selected');
        }
        this.className = "selected"
    })
})



