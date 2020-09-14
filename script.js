const add = document.querySelector('#criar-tarefa')
const assignment = document.querySelector('#texto-tarefa')

add.addEventListener('click', function () {
    let iten1 = assignment.value
    let list = document.querySelector('#lista-tarefas').innerHTML += `<li class="itens">${iten1}</li>`
    assignment.value = ""
    
const listItens = document.querySelectorAll('.itens')


for ( let index = 0; index < listItens.length; index += 1){
    const itenSelected = listItens[index]
    
    itenSelected.addEventListener('click' ,function(){
        
        itenSelected.style.backgroundColor = "rgb(128, 128, 128)"
        
        
    
       
})
const clear = document.querySelector('#apaga-tudo')
let list1 = document.querySelectorAll('.itens')
for(let index1 = 0 ; index1 < list1.length; index1 +=1){
    let itens = list1[index1]
clear.addEventListener('click' ,function(){
    
    let list = document.querySelector('#lista-tarefas')
    
    list.removeChild(itens)
})
}
}
})

    
       

