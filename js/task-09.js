function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 const buttonRef = document.querySelector('.change-color');
 const spanRef = document.querySelector('.color');

// buttonRef.addEventListener('click', () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   spanRef.textContent = document.body.style.backgroundColor;
    
// }

// );

buttonRef.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = document.body.style.backgroundColor;  
}
