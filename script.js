let textInput = document.querySelector("#texto-tarefa")
let button = document.querySelector("#criar-tarefa")
let list = document.querySelector("#lista-tarefas")

button.addEventListener("click", ()=>{
    let node = document.createElement("li")
    let textNode = document.createTextNode(textInput.value)
    node.appendChild(textNode)
    list.appendChild(node)
    textInput.value = ""
})