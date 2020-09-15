let textInput = document.querySelector("#texto-tarefa")
let creator = document.querySelector("#criar-tarefa")
let list = document.querySelector("#lista-tarefas")
let clear = document.querySelector("#apaga-tudo")
let rmSelecteds = document.querySelector("#remover-selecionado")


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
    let selected = document.querySelector(".selected")
    if (selected != null){
        selected.classList.remove("selected")
        li = event.target
        li.classList.add("selected")
    }
    else {
        li = event.target
        li.classList.add("selected")
    }
})

list.addEventListener("dblclick", (event)=>{
    li = event.target
    if(li.className == "completed"){
        li.classList.remove("completed")
    }
    else{
        li.className = "completed"
    }
})

rmSelecteds.addEventListener("click", ()=>{
    let elements = document.querySelectorAll("li")
    for (let i = 0; i < elements.length; i++){
        if (elements[i].classList.contains("selected")){
            elements[i].parentNode.removeChild(elements[i])
        }
    }
})