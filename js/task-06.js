const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  const inputValueLength = Number(input.value.length);
  const inputDatasetLength = Number(input.dataset.length);
  if (inputValueLength === inputDatasetLength) {
    input.classList = 'valid';
  } else {
    input.classList = 'invalid';
  }
}
