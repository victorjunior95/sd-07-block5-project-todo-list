window.onload = function(){
    const buttonCreateTask = document.getElementById('criar-tarefa');
    const inputTextTask = document.getElementById('texto-tarefa');
    const taskList = document.getElementById('lista-tarefas');
    const itensList = document.getElementsByTagName('li');

    function addItemToTaskList(){
        if(inputTextTask.value == ''){
            alert('adicione um nome ao item da lista')
        }else{
            let li = document.createElement('li');
            li.addEventListener('click',function(){
                li.classList.add('selected');
            })
            li.innerText = inputTextTask.value;
            taskList.appendChild(li);
            inputTextTask.value = '';
        }
    }
    



    buttonCreateTask.addEventListener('click', addItemToTaskList)
   
    
    
}