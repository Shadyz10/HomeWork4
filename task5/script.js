let input = document.querySelector('input');
let button = document.querySelector('button');
let textBlock = document.querySelector('#duplicateField');

function clearAndAdd(event) {
    event.preventDefault();
    let text = input.value;
    console.log(text);
    input.value = '';
    textBlock.textContent = '';
};

function duplicate() {
    textBlock.textContent = input.value;
};

input.addEventListener('keyup', duplicate);

button.addEventListener('click', clearAndAdd);
