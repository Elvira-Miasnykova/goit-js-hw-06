const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemsEl = document.querySelector('ul#ingredients');

const createIngredientsItems = (ingredients) => {
    return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');

    return item;
  });
};


const arr = createIngredientsItems(ingredients);

ingredientsItemsEl.append(...arr);



