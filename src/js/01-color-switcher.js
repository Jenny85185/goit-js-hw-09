const bBody = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', clickOnBtnColor);
btnStop.addEventListener('click', clickOfBtnColor);
let timerId = null;

function clickOnBtnColor() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  setTimeout(() => {
    const colorRandom = getRandomHexColor();
    bBody.style.background = colorRandom
  },1000);
  
    
}
function clickOfBtnColor() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
