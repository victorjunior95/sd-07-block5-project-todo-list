let textInput = document.querySelector("#texto-tarefa")
let button = document.querySelector("#criar-tarefa")
let list = document.querySelector("#lista-tarefas")

button.addEventListener("click", ()=>{
    let text = textInput.value
    let node = document.createElement("li")
    let textNode = document.createTextNode(text)
    node.appendChild(textNode)
    list.appendChild(node)
    text = ""
})