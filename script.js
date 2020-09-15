const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');

adicionar.addEventListener('click', function () {
    if (inputText.value === '') {
        alert("Preencha os campos");
    } else {
        let criaLista = document.createElement('li');
        criaLista.innerText = inputText.value;
        lista.appendChild(criaLista);
        inputText.value = '';
    
        let listada =  document.querySelectorAll('#lista-tarefas li');
        for (let index = 0; index < listada.length; index += 1) {
            lista.querySelectorAll('li')[index].addEventListener('click' , function () {
                for (let sel = 0; sel < listada.length; sel += 1) {
                    if (lista.querySelectorAll('li')[sel].className === 'selected') {
                        lista.querySelectorAll('li')[sel].classList.remove('selected');
                        lista.querySelectorAll('li')[sel].style.backgroundColor = '';                        
                    }
                }
                lista.querySelectorAll('li')[index].className = 'selected';
                if (lista.querySelectorAll('li')[index].className === 'selected') {
                    lista.querySelectorAll('li')[index].style.backgroundColor = 'rgb(128,128,128)';
                } 
                
            });
        }        
    }

});


/*  for (let aux = 0; aux < listada.length; aux += 1) {
                    console.log(lista.querySelectorAll('li')[aux].style.backgroundColor); 
                    if (lista.querySelectorAll('li')[index].style.backgroundColor === 'rgb(128,128,128)' ||
                    lista.querySelectorAll('li')[index].style.backgroundColor === '') {
                        lista.querySelectorAll('li')[aux].style.backgroundColor = '';
                        lista.querySelectorAll('li')[index].style.backgroundColor = '';                          
                    }                      
                }*/