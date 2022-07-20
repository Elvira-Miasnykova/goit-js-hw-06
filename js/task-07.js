const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onHandleInput);

function onHandleInput(event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
    //console.log(event.currentTarget);
    console.log(spanEl.style.fontSize);
}

