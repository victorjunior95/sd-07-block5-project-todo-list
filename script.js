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
        /*-------------------------*/
        let todasTarefas = document.querySelectorAll('li');
        for(let index=0; index < todasTarefas.length; index +=1){
            localStorage.setItem(index, todasTarefas[index].innerText);
            todasTarefas[index].addEventListener('click', function () {
                
                //localStorage.setItem(index, todasTarefas[index]); 
                /*
                for (let i = 0; i< todasTarefas.length; i+=1){
                    if(todasTarefas[i].style.backgroundColor){
                        this.style.backgroundColor="";
                    }
                
                
                } 
                 */ 
                  
                this.style.backgroundColor = 'rgb(128, 128, 128)';                           
              });
        }

             
    });

    /*xxxxxxxxxxxxxxxxxxxxxxx*/
    // iterate localStorage
    //https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
   
    for (let index = 0; index < localStorage.length; index += 1) {
        let key = localStorage.key(index);
        let value = localStorage.getItem(key);
        let novaTarefa = document.createElement('li');
        novaTarefa.innerText=value;
        listaTarefas.appendChild(novaTarefa);
        
        
    }
    /*-----------------------------------------------------------*/
    const todasTarefas = document.querySelectorAll('li');
    for(let index=0; index < todasTarefas.length; index +=1){        
        todasTarefas[index].addEventListener('click', function () {                     
            this.style.backgroundColor ='rgb(128, 128, 128)';                           
          });
        }
     
    
  };