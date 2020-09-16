//Adicionar lista de tarefas
const add = document.querySelector('#criar-tarefa')
add.addEventListener('click', function () {
  const itensList = document.createElement('li')
  const assignment = document.querySelector('#texto-tarefa')
  let list = document.querySelector('#lista-tarefas')
  list.appendChild(itensList)
  itensList.innerText = assignment.value
  assignment.value = ''

  // Selecionar iten da lista





  itensList.addEventListener('click', function () {
    const selected = document.querySelector('.selected')
    if (selected) {
      selected.classList.remove('selected')
    }
    itensList.classList.add('selected')
  })

  //Marca tarefa como completa!

  itensList.addEventListener('dblclick', function () {
    if (itensList.classList.contains('completed')) {
      itensList.classList.remove('completed')
    } else {
      itensList.classList.add('completed')
    }
  })

  //Remover tarefa completa!

  const removed = document.querySelector('#remover-finalizados')
  removed.addEventListener('click', function () {
    if (itensList.classList.contains('completed')) {
      document.querySelector('ol').removeChild(itensList)
    }
  })


  //Apagar lista
  const listAll = document.querySelectorAll('li')
  for (let index = 0; index < listAll.length; index += 1) {
    const itensClear = listAll[index]
    const clear = document.querySelector('#apaga-tudo')
    clear.addEventListener('click', function clearList() {
      list.removeChild(itensClear)

    })
  
 
    
    const up = document.querySelector('#mover-cima');
  up.addEventListener('click', function () {
    
    const selected = document.querySelector('.selected')
      document.querySelector('ol').insertBefore(selected , selected.previousElementSibling)
    

  })

  const down = document.querySelector('#mover-baixo')

  down.addEventListener('click' ,function (){
    const selected = document.querySelector('selected')
    document.querySelector('ol').insertBefore(selected , selected.nextElementSibling)
  })
}

})
const save = document.querySelector('#salvar-tarefas')

save.addEventListener('click', function () {
  localStorage.clear();
  let list1 = document.querySelector('#lista-tarefas')
  localStorage.setItem('Tarefas', list1.innerHTML)
})



window.onload = function () {
  Load()
};
function Load() {

  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('Tarefas')

}
