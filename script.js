const add = document.querySelector('#criar-tarefa')
const assignment = document.querySelector('#texto-tarefa')

//Adicionar lista de tarefas

add.addEventListener('click', function () {
  let iten1 = assignment.value
  let list = document.querySelector('#lista-tarefas')
  list.innerHTML += `<li class='iten'>${iten1}</li>`
  assignment.value = ""

  // Selecionar iten da lista

  const listItens = document.querySelectorAll('li')

  for (let index = 0; index < listItens.length; index += 1) {
    const itenSelected = listItens[index]

    itenSelected.addEventListener('click', function () {
      const selected = document.querySelector('.selected')
      if (selected) {
        selected.classList.remove('selected')
      }
      itenSelected.classList.add('selected')

    })

    //Marca tarefa como completa!

    itenSelected.addEventListener('dblclick', function () {

      if (itenSelected.classList.contains('completed')) {
        itenSelected.classList.remove('completed')
      } else {
        itenSelected.classList.add('completed')
      }

    })

    //Remover tarefa completa!

    const removed = document.querySelector('#remover-finalizados')
    removed.addEventListener('click', function () {
      let list = document.querySelector('#lista-tarefas')
      if (itenSelected.classList.contains('completed')) {
        list.removeChild(itenSelected)
      }
    })


    //Apagar lista

    const clear = document.querySelector('#apaga-tudo')

    clear.addEventListener('click', function () {

      list.removeChild(itenSelected)

    })

    const save = document.querySelector('#salvar-tarefas')
    
    save.addEventListener('click', function () {
        for (let index1 = 0; index1 < listItens.length; index1 += 1){
        localStorage.setItem('Tarefas',listItens[index1].innerHTML)
        }
    })

  }


})
