window.onload = function() {
    const btCriarTarefa = document.getElementById('criar-tarefa');
    const textoTarefa = document.getElementById('texto-tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    btCriarTarefa.addEventListener('click', function(){
        let tarefa = textoTarefa.value;
        let novaTarefa = document.createElement('li');
        novaTarefa.innerText=tarefa;
        listaTarefas.appendChild(novaTarefa);
        textoTarefa.value ="";
        textoTarefa.focus();
        
    });

    


  };