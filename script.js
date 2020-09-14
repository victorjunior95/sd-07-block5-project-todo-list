const add = document.querySelector('#criar-tarefa')
const assignment = document.querySelector('#texto-tarefa')

add.addEventListener('click', function () {
    let iten1 = assignment.value
    let list = document.querySelector('#lista-tarefas').innerHTML += `<li class="itens">${iten1}</li>`
    assignment.value = ""

const listItens = document.querySelectorAll('.itens')
for ( let index = 0; index < listItens.length; index += 1){
    const iten = listItens[index]
    iten.addEventListener('click' ,function(){
         iten.style.backgroundColor = "rgb(128, 128, 128)"
    })
}
})