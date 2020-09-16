function basicStructure(){
  const headerPage = document.createElement('header');
  headerPage.className = 'head-class';
  document.body.appendChild(headerPage);
  const navPage = document.createElement('nav');
  document.body.appendChild(navPage);
  const mainPage = document.createElement('main');
  mainPage.className = 'main-class';
  document.body.appendChild(mainPage);
  const articlePage = document.createElement('article');
  mainPage.appendChild(articlePage);
  const sectionFirst = document.createElement('section');
  sectionFirst.className = 'first-section';
  sectionFirst.setAttribute('id', 'first-section');
  articlePage.appendChild(sectionFirst);
  const sectionSecond = document.createElement('section');
  sectionSecond.className = 'second-section';
  sectionSecond.setAttribute('id', 'second-section');
  articlePage.appendChild(sectionSecond);
  const asidePage = document.createElement('aside');
  mainPage.appendChild(asidePage);
  const footerPage = document.createElement('footer');
  document.body.appendChild(footerPage);
}
basicStructure();

function titleOfheader() {
  const getHeader = document.getElementsByTagName('header')[0];
  const titlePage = document.createElement('h1');
  titlePage.className = 'title';
  titlePage.innerText = 'Minha Lista de Tarefas';
  getHeader.appendChild(titlePage);
}
titleOfheader();

function textForInstruction() {
  const getNav = document.getElementsByTagName('nav')[0];
  const paragraphInformactive = document.createElement('p');
  paragraphInformactive.setAttribute('id', 'funcionamento');
  paragraphInformactive.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  getNav.appendChild(paragraphInformactive);
}
textForInstruction();

function insertItemToDo() {
  const parentSectionFirst = document.getElementById('first-section');
  const inputTextItem = document.createElement('input');
  inputTextItem.setAttribute('type', 'text');
  inputTextItem.setAttribute('id', 'texto-tarefa');
  inputTextItem.className = 'texto-tarefa';
  parentSectionFirst.appendChild(inputTextItem);
  // Button
  const sendTextItem = document.createElement('button');
  sendTextItem.className = 'criar-tarefa';
  sendTextItem.setAttribute('id', 'criar-tarefa');
  sendTextItem.innerText = 'Adicionar Nova Tarefa'
  parentSectionFirst.appendChild(sendTextItem);
}
insertItemToDo();

function createOrdenateList(data){
  const parentItemSection = document.getElementById('first-section');
  const ordenateListToDo = document.createElement('ol');
  ordenateListToDo.setAttribute('id', 'lista-tarefas');
  ordenateListToDo.className = 'lista-tarefas';
  parentItemSection.appendChild(ordenateListToDo);
  
  if (data.length !== 0) {
    let dataLi = [];
    for (let index = 0; index < data.length; index += 1) {
      const itemLi = document.createElement('li');
      itemLi.className = 'item-tarefa';
      itemLi.innerText = data[index];
      ordenateListToDo.appendChild(itemLi);
    }
  }
}
createOrdenateList(['teste1', 'teste2', 'teste3', 'teste4']);