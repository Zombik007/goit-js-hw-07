const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const buttons = document.querySelectorAll('#controls button');
let amountValue = 0;

buttons[0].addEventListener('click', onBtnRenderClick);
buttons[1].addEventListener('click', onBtnDestroyClick);

input.addEventListener('change', onInputChange);

function onInputChange() {
  amountValue = input.value;
  console.log(amountValue);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const boxesEl = document.createElement('div');
    boxesEl.style.backgroundColor = boxesRandomColor();
    boxesEl.style.width = i * 10 + 'px';
    boxesEl.style.height = i * 10 + 'px';
    boxesEl.style.margin = '10px';
    boxes.appendChild(boxesEl);
  }
}

function onBtnRenderClick() {
  createBoxes(amountValue);
}

function onBtnDestroyClick() {
  boxes.innerHTML = '';
}

function boxesRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`;
}
