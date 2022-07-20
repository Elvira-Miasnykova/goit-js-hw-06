const inputEl = document.querySelector('input#validation-input');
//const outputEl = document.querySelector('span#name-output');


const onCheckedElement = event => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        console.log('border-color changed to green');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
        console.log('border-color changed to red');
    }
};

inputEl.addEventListener('blur', onCheckedElement);


