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
            li.addEventListener('click',toggleSelected)
            li.addEventListener('dblclick', markAsCompleted)
            li.innerText = inputTextTask.value;
            taskList.appendChild(li);
            inputTextTask.value = '';
        }
    }

    function toggleSelected(event){
        const selectedItem = document.querySelector('.selected');
        
        if(selectedItem){
            selectedItem.classList.remove('selected')
        }
        
        event.target.classList.add('selected');

    }
    function markAsCompleted(event){
        const selectedItem = document.querySelector('.completed');
        
    
        event.target.classList.toggle('completed')

    }
    



    buttonCreateTask.addEventListener('click', addItemToTaskList);
   
    
    
}