const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const display = document.querySelector('[data-display]');

// Global variables
let operator = '';
let previousOperand = '';
let currentOperand = '';

const clear = function() {
    previousOperand = '';
    currentOperand = '';
    operator = '';
    display.textContent = 0;
}

const appendNumber = function (number) {
    if (display.textContent != '0') {
        currentOperand += number;
    } else if (display.textContent == '0') {
        currentOperand = number;
    }
}

const updateDisplay = function () {
    display.textContent = currentOperand;
}

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

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        updateDisplay();
    })
})

clearButton.addEventListener('click', () => {
    clear();
})