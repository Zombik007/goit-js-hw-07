// Виведення кількості елементів у списку
const categoriesEl = document.querySelectorAll('.item');

const quantityOfListEl = () => {
  console.log(`У списку ${categoriesEl.length} категорії.`);
};

quantityOfListEl();

// Виведення кількості назв категорій і кількості елементів у них
const namesOfListEl = () => {
  categoriesEl.forEach(nameItemEl => {
    console.log(`Категорія: ${nameItemEl.querySelector('h2').textContent}`);
    console.log(
      `Кількість елементів: ${nameItemEl.querySelectorAll('li').length}`,
    );
  });
};

namesOfListEl();
