const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');

function criaLista(inputText) {
    if (inputText.value === '') {
        alert("Preencha os campos");
    } else {
        let criaLista = document.createElement('li');
        criaLista.innerText = inputText.value;
        lista.appendChild(criaLista);
        inputText.value = '';
    }
}

function selected(listada) {
    for (let index = 0; index < listada.length; index += 1) {
        lista.querySelectorAll('li')[index].addEventListener('click' , function () {
            for (let sel = 0; sel < listada.length; sel += 1) {
                if (lista.querySelectorAll('li')[sel].className === 'selected' ||
                lista.querySelectorAll('li')[sel].className === 'completed') {
                    lista.querySelectorAll('li')[sel].classList.remove('selected');
                    lista.querySelectorAll('li')[sel].style.backgroundColor = '';                        
                }
            }
            if (lista.querySelectorAll('li')[index].className === 'completed') {
                lista.querySelectorAll('li')[index].className = 'completed';               
            } else {
                lista.querySelectorAll('li')[index].className = 'selected';
            }
            if (lista.querySelectorAll('li')[index].className === 'selected' || 
            lista.querySelectorAll('li')[index].className === 'completed') {
                lista.querySelectorAll('li')[index].style.backgroundColor = 'rgb(128,128,128)';
            }                 
        });
    }        

}

function completed(listada) {
    for (let index = 0; index < listada.length; index += 1) {
        lista.querySelectorAll('li')[index].addEventListener('dblclick' , function () {

        lista.querySelectorAll('li')[index].className = 'completed';
        if (lista.querySelectorAll('li')[index].className === 'completed') {
            lista.querySelectorAll('li')[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        }     
        });
    }       

}

function disable(listada) {
    for (let index = 0; index < listada.length; index += 1) {
        lista.querySelectorAll('li')[index].addEventListener('mouseup' , function () {
            if (lista.querySelectorAll('li')[index].className === 'completed') {
                lista.querySelectorAll('li')[index].className = '';
                lista.querySelectorAll('li')[index].style.textDecoration = '';
            }
        })
    }
}

adicionar.addEventListener('click', function () {
    criaLista(inputText);    
    let listada =  document.querySelectorAll('#lista-tarefas li');
    selected(listada);
    completed(listada);
    disable(listada);
});

/*for (let index = 0; index < listada.length; index += 1) {
        lista.querySelectorAll('li')[index].addEventListener('dblclick' , function () {
            console.log('clique duplo');
        for (let com = 0; com < listada.length; com += 1) {
            if (lista.querySelectorAll('li')[com].className === 'completed') {
                lista.querySelectorAll('li')[com].classList.remove('completed');
                lista.querySelectorAll('li')[com].style.textDecoration = '';                
            } 
        }
        if (lista.querySelectorAll('li')[index].className !== 'completed') {
            lista.querySelectorAll('li')[index].classList.add('completed');
            lista.querySelectorAll('li')[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        } 

        });
    }        
*/