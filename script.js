const buttonCreateTask = document.getElementById('criar-tarefa');
const inputTextTask = document.getElementById('texto-tarefa')
const taskList = document.getElementById('lista-tarefas')

buttonCreateTask.addEventListener('click',function(){

    if(inputTextTask.value == ""){
        alert("adicione um nome ao item da lista")
    }else{
        let li = document.createElement("li")
        li.innerText = inputTextTask.value
        taskList.appendChild(li)
        inputTextTask.value = ""
    }
   
})