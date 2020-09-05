const botao = document.querySelector('.submit-button');
    
function novoTexto () {
  const contentDiv = document.querySelector('.content-div');
  let divText = 'Esse será o texto da div'

  contentDiv.innerText = divText;
}

botao.addEventListener('click', novoTexto);