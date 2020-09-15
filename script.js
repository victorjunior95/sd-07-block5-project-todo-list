let inputText = document.getElementById("texto-tarefa")
let list = document.getElementById("lista-tarefas")
let button = document.getElementById("criar-tarefa")

// -------------- ADCIONANDO OS TODOS ---------------- //

button.addEventListener("click", function() {
    let novoTodo = document.createElement('li')
    novoTodo.innerHTML = inputText.value
    list.appendChild(novoTodo)
    inputText.value = ""
    inputText.focus()
    novoTodo.addEventListener("dblclick", duploclick)
    novoTodo.addEventListener("click", function() {    
        const previousItem = document.getElementsByClassName('selected');
        if (previousItem.length > 0) {
        previousItem[0].classList.remove('selected');
        }
        this.className = "selected"
    })
})

// -------------- RISCANDO TODOS COMPLETADOS ---------------- //

function duploclick(event) {
    const eventList = event.target.classList;
  for (let i = 0; i < eventList.length; i += 1) {
    if (eventList[i] === 'completed') {
      eventList.remove('completed');
      return;
    }
  }
  event.target.classList.add('completed');
}

