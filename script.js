let textInput = document.querySelector("#texto-tarefa")
let creator = document.querySelector("#criar-tarefa")
let list = document.querySelector("#lista-tarefas")
let clear = document.querySelector("#apaga-tudo")


creator.addEventListener("click", ()=>{
    let node = document.createElement("li")
    let textNode = document.createTextNode(textInput.value)
    node.appendChild(textNode)
    list.appendChild(node)
    textInput.value = ""
})

clear.addEventListener("click", ()=>{
    list.innerHTML = ""
})