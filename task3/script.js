// Первый вариант


// let light1 = document.querySelector('#green');
// let light2 = document.querySelector('#yellow');
// let light3 = document.querySelector('#red');
// let block = document.querySelector('.block');


// block.addEventListener('click', changeColor1);
// function changeColor1() {
//     light1.style.background = ('green');
//     light2.style.background = ('black');
//     light3.style.background = ('black');
//     this.removeEventListener('click', changeColor1);
//     this.addEventListener('click', changeColor2);
// };

// function changeColor2() {
//     light1.style.background = ('black');
//     light2.style.background = ('yellow');
//     light3.style.background = ('black');
//     this.removeEventListener ('click', changeColor2);
//     this.addEventListener('click', changeColor3);
// };

// function changeColor3() {
//     light1.style.background = ('black');
//     light2.style.background = ('black');
//     light3.style.background = ('red');
//     this.removeEventListener('click', changeColor3);
//     this.addEventListener('click', changeColor1);
// };



// Второй вариант

let light1 = document.querySelector('#green');
let light2 = document.querySelector('#yellow');
let light3 = document.querySelector('#red');
let block = document.querySelector('.block');

let currentColor = 0;

block.addEventListener('click', changeColor);

function changeColor() {
    light1.style.background = 'black';
    light2.style.background = 'black';
    light3.style.background = 'black';

    switch (currentColor) {
        case 0:
            light1.style.background = 'green';
            break;
        case 1:
            light2.style.background = 'yellow';
            break;
        case 2:
            light3.style.background = 'red';
            break;        
    }

    currentColor = (currentColor + 1) % 3; 
}