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

// APAGAR TUDO
let pai = document.getElementById("lista-tarefas")
let apagar = document.getElementById("apaga-tudo")
apagar.addEventListener("click",function(){
    pai.innerHTML="";
})

// APAGAR FINALIZADOS
let apagarCompletos = document.getElementById("remover-finalizados")
apagarCompletos.addEventListener("click",function(){

    let pai = document.getElementById("lista-tarefas")
    let lista = document.querySelectorAll(".item");

for (let i=0;i<lista.length;i+=1){
    if(lista[i].classList.contains("completed")==true){
        pai.removeChild(lista[i])
        console.log("apagou finalizado")
    }
}    
})

// APAGAR SELECIONADO

let removerSelecionado = document.getElementById("remover-selecionado")
removerSelecionado.addEventListener("click",function(){
    
    let pai = document.getElementById("lista-tarefas")
    let lista = document.querySelector(".selected");
    pai.removeChild(lista);  
})

//SALVAR LISTA EM LOCALSTORAGE

let salvar = document.getElementById("salvar-tarefas")
salvar.addEventListener("click",function(){

    let lista = document.querySelectorAll(".item");
    localStorage.clear();
    localStorage.setItem("tamanho",lista.length)

    for (let i=0;i<lista.length;i+=1){
        localStorage.setItem(i, lista[i].outerHTML);
        console.log(lista[i]);
    }

})

//CARREGAR LISTA DE LOCALSTORAGE

    let tamanho = localStorage.getItem("tamanho")

    for(let i=0;i<tamanho;i+=1){
        let tarefa = localStorage.getItem(i)
        let novo = document.createElement('li')
        pai.appendChild(novo);
        novo.outerHTML = tarefa; 
        
    }
// MOVER PARA CIMA OU PARA BAIXO

let cima = document.getElementById("mover-cima")

cima.addEventListener("click",function(){

    let atual = document.querySelector(".selected")
    if (atual!=null){
        if(atual.previousElementSibling){
            let anterior = atual.previousElementSibling;
            anterior.before(atual)
        }
    }
})
