const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length == input.dataset.length) {
    input.classList = 'valid';
  } else {
    input.classList = 'invalid';
  }
}
