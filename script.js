// Criar próxima tarefa
let botaoEntrada = document.getElementById("criar-tarefa");

    botaoEntrada.addEventListener("click", function(){
    let entrada = document.getElementById("texto-tarefa");
    
    if (entrada.value != ""){
    let item =document.createElement("li");
    item.classList="item"
    item.innerText = entrada.value;
    let pai = document.getElementById("lista-tarefas")
    pai.appendChild(item);
    entrada.value = "";
    let lista = document.querySelectorAll(".item");
    item.id = lista.length;
    criarEventos();
    tarefasCompletas();   
       
    }
})    


// // Marcando itens selecionados.  


function criarEventos(){
    let lista = document.querySelectorAll(".item");
for (let i = 0; i < lista.length; i++) {
    (function(i) {
         lista[i].addEventListener("click", function() {
            let apagar = document.getElementsByClassName("selected")
           if (apagar[0] == null){
           lista[i].classList.add("selected");
           } else{
                document.getElementsByClassName("selected")[0].classList.remove("selected")
              lista[i].classList.add("selected");
            }
        })
    })(i);
 }
}

// MARCAR TAREFAS COMPLETAS

function tarefasCompletas(){
let completos = document.querySelectorAll(".item")
let listaCompletos =[];
for (let i = 0; i < completos.length; i++) {
    (function(i) {
         completos[i].addEventListener("dblclick", function() {
           if(listaCompletos[i]==1){
               completos[i].classList.remove("completed")
               console.log("tira taxado")
               listaCompletos[i]=0;
           }else{
            console.log("coloca taxado")
            completos[i].classList.add("completed");
            listaCompletos[i] =1;
        }
        })
    })(i);
 }
}
