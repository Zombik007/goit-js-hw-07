const counter = document.querySelector('#value');
let counterValue = 0;
const counterBtnActions = document.querySelectorAll('#counter button');
const incrementBtn = counterBtnActions[1];
const decrementBtn = counterBtnActions[0];

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment() {
  counter.textContent = counterValue += 1;
}

function decrement() {
  counter.textContent = counterValue -= 1;
}
