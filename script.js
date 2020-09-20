'use strict'
window.onload = function () {

    clearListedField();
    insertTextBuildListField();
    clearField();
    RiskListChosen();
    paintListChosenAndTakeIt();

    function insertTextBuildListField() {
        document.querySelector("#criar-tarefa").addEventListener("click", function () {
            let list = document.querySelector("#lista-tarefas");
            let text = document.querySelector("#texto-tarefa");
            let li = document.createElement('li');
            li.className = 'item';
            li.textContent = text.value;
            if (text.value === '') {
                alert("Você precisa adicionar algo!");
            } else {
                list.appendChild(li);
                text.value = "";
                text.focus();
            }
        });
    }


    function clearListedField() {
        let list = document.querySelectorAll('ol');
        let btn = document.querySelector('.clearReadyBtn');
            list.forEach(item => {
                btn.addEventListener('click', function () {
                    console.log(item.className === 'item selected');
                    if (item.className === 'item selected' ) {
                        list.removeChild(item);
                    }
                });
            });
    }


    function clearField() {
        document.querySelector('.btnClear').addEventListener('click', function () {
            let li = document.getElementsByTagName('ol');
            for (let item = 0; item < li.length; item += 1) {
                li[item].innerHTML = '';
            }
        });
    }

    // function selectItem() {
    //     let list = document.querySelectorAll('ol');
    //     list.forEach(item => { // para cada elemento
    //         item.addEventListener('dblclick', function (event) {
    //             event.target.classList.add('selected');
    //         });
    //     });
    // }

    // function RiskListChosen() {
    //     let list = document.querySelectorAll('ol');
    //     for (let item = 0; item < list.length; item += 1) {
    //         list[item].addEventListener('dblclick', function (event) {
    //             event.target.style.textDecoration = 'line-through';
    //         });
    //     }
    // }
    function RiskListChosen() {
        let list = document.querySelectorAll('ol');
        list.forEach(item => {
            item.addEventListener('dblclick', function (event) {
                event.target.classList.add('selected');
                if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
                    event.target.style.textDecoration = '';
                    event.target.classList.remove('selected');
                } else
                    event.target.style.textDecoration = 'line-through solid';
                event.target.style.textDecorationColor = 'rgb(0,0,0)'
            });
        });

    }


    function paintListChosenAndTakeIt() {
        let list = document.querySelectorAll('ol');
        for (let item = 0; item < list.length; item += 1) {
            list[item].addEventListener('click', function (event) {
                if (event.target.style.backgroundColor === 'rgb(128, 128, 128)') {
                    event.target.style.backgroundColor = '';
                } else
                    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            });
        }
    }

}