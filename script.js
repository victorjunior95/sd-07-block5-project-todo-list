const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');
const botaoLimpa = document.querySelector('#apaga-tudo');
const botaoCompleto = document.querySelector('#remover-finalizados');

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
                if (listada[sel].className === 'selected' ||
                listada[sel].className === 'completed') {
                    listada[sel].classList.remove('selected');
                    listada[sel].style.backgroundColor = '';                        
                }
            }
            if (listada[index].className === 'completed') {
                listada[index].className = 'completed';               
            } else {
                listada[index].className = 'selected';
            }
            if (listada[index].className === 'selected' || 
            listada[index].className === 'completed') {
                listada[index].style.backgroundColor = 'rgb(128,128,128)';
            }                 
        });
    }        

}

function completed(listada) {
    for (let index = 0; index < listada.length; index += 1) {
        listada[index].addEventListener('dblclick' , function () {
            if (listada[index].className === 'completed') {
                listada[index].className = 'selected'; 
            } else if (listada[index].className === 'selected') {
                listada[index].className = 'completed';
            }            
        });
    } 
}

/*function disable(listada) {  
    for (let index = 0; index < listada.length; index += 1) {
        lista.querySelectorAll('li')[index].addEventListener('dblclick' , function () {
                listada[index].className = 'selected';          
        })
    }
}*/

adicionar.addEventListener('click', function () {
    criaLista(inputText);    
    let listada =  document.querySelectorAll('#lista-tarefas li');
    selected(listada);
    completed(listada);
    //disable(listada);            
});

botaoLimpa.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada.length > 0) {
            listada[index].remove();
        }
        
    }
});

botaoCompleto.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada[index].className === 'completed') {
            listada[index].remove(document.getElementsByClassName('completed'));                  
        }
    }
});
