const input = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

input.addEventListener('change', onInputChange);

function onInputChange() {
  textSize.style.fontSize = `${input.value}px`;
  console.log(input.value);
}
