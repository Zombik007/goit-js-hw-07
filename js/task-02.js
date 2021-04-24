const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const newListEl = document.querySelector('#ingredients');

const createListEl = newList => {
  return newList.map(listElemetns => {
    const listEl = document.createElement('li');
    listEl.textContent = listElemetns;
    return listEl;
  });
};

const elements = createListEl(ingredients);
newListEl.append(...elements);
