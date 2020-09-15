let pressButton = document.querySelector("#criar-tarefa");
let inputValue = document.querySelector("#texto-tarefa");
let itemList = document.querySelectorAll("li");

pressButton.addEventListener('click', function(){
    if(inputValue.value != ""){
        let newItem = document.createElement('li');
        newItem.innerText = inputValue.value;
        document.querySelector('#lista-tarefas').appendChild(newItem);
        inputValue.value = "";
        itemList = document.querySelectorAll("li");
        addBackgroundItem();
    }
});

function eraseBackground(){
    for(let index = 0; index < itemList.length; index += 1){
        if(itemList[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            itemList[index].style.backgroundColor = "white";
        }
    }
}

function addBackgroundItem (){
    for(let index = 0; index < itemList.length; index += 1){
        itemList[index].addEventListener('click', function(){
            eraseBackground();   
        if(itemList[index].style.backgroundColor != 'rgb(128, 128, 128)'){     
            itemList[index].style.backgroundColor = 'rgb(128, 128, 128)';
        }else {
            itemList[index].style.backgroundColor = "white";
        }  
        });
    }
}