const buton = document.getElementById('criar-tarefa');
const list = document.getElementById('texto-tarefas');
buton.addEventListener('click', function(){
    let aFazer = document.querySelector("#texto-tarefa").value;
    frase = document.createElement("li")
    frase.innerText = aFazer
    list.appendChild(frase);
    let teste = document.querySelector("#texto-tarefa");
    teste.value = '';
})