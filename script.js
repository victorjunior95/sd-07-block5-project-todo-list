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
    elements = document.querySelectorAll("#lista-tarefas li")
})

clear.addEventListener("click", ()=>{
    list.innerHTML = ""
})


list.addEventListener("click", (event)=>{
    li = event.target
    li.style.backgroundColor = "rgb(128,128,128)"
})

list.addEventListener("dblclick", (event)=>{
    li = event.target
    li.className = "completed"
})