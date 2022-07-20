const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');



const onInputElement = event => {
    if (event.currentTarget.value !== '') {
        outputEl.textContent = event.currentTarget.value;
    } else {
        outputEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener('input', onInputElement);