window.onload=function(){

    let botaoAdicionar=document.getElementById('criar-tarefa');
    let botaoApagaTudo=document.getElementById('apaga-tudo');
    let botaoApagaFinalizados=document.getElementById('remover-finalizados');
    let novaTarefa=document.getElementById('texto-tarefa');
    let listaTarefas=document.getElementById('lista-tarefas');    

    botaoAdicionar.addEventListener('click',function(){
        let tarefa=novaTarefa.value;
        adicionaTarefa(tarefa);
    })

    botaoApagaFinalizados.addEventListener('click',function(){
        for(i=listaTarefas.childElementCount-1; i>=0; i-=1){
            if (listaTarefas.children[i].classList.contains('completed')){
                listaTarefas.children[i].remove();
            }
        }
    })

    botaoApagaTudo.addEventListener('click',function(){
        for(i=listaTarefas.childElementCount-1; i>=0; i-=1){
            listaTarefas.children[i].remove();
        }
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
            if (listaTarefas.children[i].classList.contains('selecionado')){
                listaTarefas.children[i].classList.remove('selecionado')
            }
        }

        //Adiciona a classe selecionado ao item clicado
        if (item.id != 'lista-tarefas'){
            item.classList.add('selecionado');
        }
    })
    //------------------------------------------------------------------------------------------

    //Este bloco é responsável pela funcionalidade de duplo clique que indica que a tarefa foi finalizada
    listaTarefas.addEventListener('dblclick',function(){
        let item=event.target

        //Limpa a classe completed caso ela já exista
            if (item.classList.contains('completed')){
                item.classList.remove('completed')
            } else {
                //Adiciona a classe completed ao item clicado
                    if (item.id != 'lista-tarefas'){
                        item.classList.add('completed');
                    }
                }                        
            })

}
