const list = document.querySelector("#lista-tarefas");
const button = document.querySelector("#criar-tarefa");
const inputText = document.querySelector("#texto-tarefa");

function createListItem (){
    //creates items
    const listItem = document.createElement("li");
    listItem.innerText = inputText.value;
    list.appendChild(listItem);
    inputText.value = '';
    //adds gray background to selected item
    listItem.addEventListener("click", function(){
        for (let index = 0; index < listItem.length; index += 1){
            if (listItem[index].classList.contains('selected')){
            listItem[index].classList.remove('selected');
            } 
        }
        event.target.classList.add('selected');
    });
    //marks item as completed
    listItem.addEventListener("dblclick", function(){
        switch (listItem){
            case listItem.classList.contains("completed"):
                listItem.className = '';
            break;
            default:
                listItem.className = 'completed';
        }
    });
}

button.addEventListener("click", createListItem);