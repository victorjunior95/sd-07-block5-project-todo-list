const add = document.querySelector('#criar-tarefa')
const assignment = document.querySelector('#texto-tarefa')

add.addEventListener('click', function () {
    let iten1 = assignment.value
    let list = document.querySelector('#lista-tarefas').innerHTML += `<li class='iten'>${iten1}</li>`
    assignment.value = ""
    
const listItens = document.getElementsByTagName('li')

for ( let index = 0; index < listItens.length; index += 1){
    const itenSelected = listItens[index]
    itenSelected.addEventListener('click' ,function(){
    itenSelected.id='selected'
})

itenSelected.addEventListener('dblclick' , function (){
    if(itenSelected.className ==='iten'){
        itenSelected.className='completed'
    } else {
        itenSelected.className= 'iten'
    }
})
const removed = document.querySelector('#remover-finalizados')
removed.addEventListener('click' ,function(){
    let list = document.querySelector('#lista-tarefas')
    if(itenSelected.className === 'completed'){
        list.removeChild(itenSelected)
    }
})
}

const clear = document.querySelector('#apaga-tudo')
for(let index1 = 0 ; index1 < listItens.length; index1 +=1){
    let itens = listItens[index1]
clear.addEventListener('click' ,function(){
    
    let list = document.querySelector('#lista-tarefas')
    
    list.removeChild(itens)
})
}
})

    
       

