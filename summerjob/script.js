const stylesheet = document.querySelector('.stylesheet');
const header = document.querySelector('.header');
const body = document.getElementsByTagName('body')[0];
const centralTitle = document.querySelector('.central-title');
const question = document.querySelector('.stylesheet');
const navBar = document.querySelector('.nav-bar');
const centerh1 = document.querySelector('.center-h1');

question.addEventListener('click', function () {
  let style = document.getElementById('stylesheet');
  style.href = "style1.css";
  header.appendChild(centralTitle);
  centralTitle.appendChild(centerh1);
  navBar.removeChild(stylesheet)
});



