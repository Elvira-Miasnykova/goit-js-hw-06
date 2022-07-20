let counterValue = 0;
const buttonDeccrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

buttonDeccrement.addEventListener('click', ( ) => {
    counterValue -= 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
})

buttonIncrement.addEventListener('click', ( ) => {
    counterValue += 1;
    console.log(counterValue);
    spanValue.textContent = counterValue;
})