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
    if (display.textContent !== '0') {
        currentOperand += number;
    } else if (display.textContent == '0') {
        currentOperand = number;
    }
}

const updateDisplay = function () {
    display.textContent = currentOperand;
}

const chooseOperation = function (operation) {
    if (currentOperand !== '') {
        operator = operation;
        previousOperand = currentOperand;
        currentOperand = '';
    } else if (previousOperand !== '') {
        operate(); 
    }
}

const operate = function(firstOperand, secondOperand, operator) {
    let computation;
    switch (operator) {
        case '+':
	        computation = +firstOperand + +secondOperand;
            break;
        case '-': 
            computation = +firstOperand - +secondOperand;
            break;
        case '/':
            computation = +firstOperand / +secondOperand;
            break;
        case 'x':
            computation = +firstOperand * +secondOperand;
            break;
        default:
            return
    }
    currentOperand = computation;
    operator = '';
    previousOperand = ''
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

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
    })
})

equalsButton.addEventListener('click', button => {
    operate(previousOperand, currentOperand, operator);
    updateDisplay();
})