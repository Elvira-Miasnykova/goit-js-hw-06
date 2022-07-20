function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type = "number"]'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function onClickButtonCreate() {
  refs.boxes.innerHTML = '';
   createBoxes(refs.input.value);
}



function createBoxes(amount) {
  const arrayOfBoxes = [];
//let x = 20;
//let y = 20;
  for (let i = 0; i < amount; i += 1) {
    const boxRandom = document.createElement('div');
    boxRandom.style.width = (i * 10) + 30 + 'px';
    boxRandom.style.height = (i * 10) + 30 + 'px';
    //boxRandom.style.width = `${(x += 10)} px`;
    //boxRandom.style.height = `${(y += 10)} px`;
    boxRandom.style.backgroundColor = getRandomHexColor();
    arrayOfBoxes.push(boxRandom);
  }
  
  refs.boxes.append(...arrayOfBoxes);
}

function onClickButtonDestroy() {
  refs.boxes.innerHTML = '';
}


refs.buttonCreate.addEventListener('click', onClickButtonCreate);
refs.buttonDestroy.addEventListener('click', onClickButtonDestroy);



