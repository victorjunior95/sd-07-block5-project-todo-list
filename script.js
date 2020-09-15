window.onload = function(){
    //Declarando variáveis
    let btnNewTask = document.getElementById("criar-tarefa");
    let taskSelect = document.querySelectorAll("li");
    
    //Adicionando evento de colocar o input na lista
    btnNewTask.addEventListener("click", function(){
        //Declarando variáveis participantes do evento
        let textInput = document.getElementById("texto-tarefa");//Vai receber o texto
        let listMother = document.getElementById("lista-tarefas");//Declarando node mãe
        let listChild = document.createElement("li");//Criando elemento lista
        listMother.appendChild(listChild).innerText = textInput.value;//Adicionado a filha/tarefa na lista ordenada
        textInput.value = "";
    })
}