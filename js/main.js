let a = ''; // first number
let b = ''; // second number
let sign = ''; //знак операций
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/', ];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    let a = ''; // first number
    let b = ''; // second number
    let sign = ''; //знак операций
    let finish = false;
    out.textContent = 0;
}