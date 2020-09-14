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
    item.id = lista.length
    criarEventos()   
       
    }
})    

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
// // Marcando itens selecionados.  
function selecionar(index){
    let lista = document.querySelectorAll(".item");
    console.log(lista[index])
    lista[index].classList.add ("selected")
}
// botaoEntrada.addEventListener("click", function(){
//     let lista = document.querySelectorAll(".item");
//     for (let index =0; index<lista.length;index +=1){
//         lista[i].addEventListener("click", function(){
//             lista[i].style.backgroundColor = "rgb(128, 128, 128)"
//         })
//     }
// })