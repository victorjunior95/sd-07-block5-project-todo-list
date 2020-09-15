window.onload=function(){

    let botaoAdicionar=document.getElementById('criar-tarefa');
    let novaTarefa=document.getElementById('texto-tarefa');
    let listaTarefas=document.getElementById('lista-tarefas');    

    botaoAdicionar.addEventListener('click',function(){
        let tarefa=novaTarefa.value;
        adicionaTarefa(tarefa);
    })

    function adicionaTarefa(tarefa){
        let adicionaTarefa=document.createElement('li');
        adicionaTarefa.innerText=tarefa;
        //adicionaTarefa.className='item-list';
        listaTarefas.appendChild(adicionaTarefa);
        novaTarefa.value='';
    }

    //Este bloco para mudar o cor do item selecionado foi inspirado no PR de CAROL BEZERRA
    listaTarefas.addEventListener('click',function(){
        let item=event.target

        //Limpa o nome de classes dos itens da lista
        for(i=0; i<listaTarefas.childElementCount; i+=1){
            if (listaTarefas.children[i].className){
                listaTarefas.children[i].className=''
            }
        }

        //Adiciona a classe selecionado ao item clicado
        if (item.id != 'lista-tarefas'){
            item.className='selecionado';
        }
    })
    //------------------------------------------------------------------------------------------

}
