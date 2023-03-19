const display = document.querySelector('#display');
const allBtns = document.querySelectorAll("button");
let operator = null;
let firstOperand = null;
let secondOperand = null;
let previousType = null;

const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const multiply = function(a, b) {
	return +a * +b;
};

const divide = function(a, b) {
	return +a / +b;
};

const operate = function(a, b, operator) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else if (operator == 'x') {
        return multiply(a, b);
    }
}

allBtns.forEach((button) => {
    const keyContent = button.textContent;
    button.addEventListener('click', () => {
       console.log(button.dataset.keytype);
    });
});