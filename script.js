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
        lista[lista.length-1].addEventListener("click", selecionar(lista.length-1   ))
    
    }
})

// // Marcando itens selecionados.  
function selecionar(index){
    let lista = document.querySelectorAll(".item");
    lista[index].style.backgroundColor = "rgb(128, 128, 128)"
}
// botaoEntrada.addEventListener("click", function(){
//     let lista = document.querySelectorAll(".item");
//     for (let index =0; index<lista.length;index +=1){
//         lista[i].addEventListener("click", function(){
//             lista[i].style.backgroundColor = "rgb(128, 128, 128)"
//         })
//     }
// })