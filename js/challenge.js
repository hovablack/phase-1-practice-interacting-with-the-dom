const counter = document.querySelector('#counter')
const btnPause = document.querySelector('#pause')
let count = 0;
let intervalID;

document.addEventListener('DOMContentLoaded', () => {
  intervalID = setInterval(timer, 1000);
})

function timer() {
  count += 1
  counter.textContent = count;
}

btnPause.addEventListener('click', function () {
  clearInterval(intervalID);
})