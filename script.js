let buttonAdd = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');
let outList = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', function(){
    if (!(inputText.value) == ''){
    let liElement = document.createElement('li');
    liElement.innerText = inputText.value;
    outList.appendChild(liElement)
    inputText.value = "";
    }
    else {
        alert("campo de texto vazio")
    }
    inputText.focus();

})

