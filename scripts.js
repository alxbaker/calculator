const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const display = document.querySelector('[data-display]');

// Global variables
let operator = '';
let previousOperand = '';
let currentOperand = '';
let justCalculated = false;

const clear = function() {
    previousOperand = '';
    currentOperand = '';
    operator = '';
    justCalculated = false;
    display.textContent = 0;
}

const appendNumber = function (number) {
    if (display.textContent == '0' || justCalculated) {
        justCalculated = false;
        previousOperand = currentOperand
        currentOperand = number;
    } else if (display.textContent !== '0') {
        currentOperand += number;
    } 
}

const updateDisplay = function () {
    if (currentOperand !== '') {
        display.textContent = currentOperand;
    }
}

const chooseOperation = function (operation) {
    if (currentOperand !== '' && previousOperand == '') {
        operator = operation;
        previousOperand = currentOperand;
        currentOperand = '';
        justCalculated = false;
    } else if (currentOperand == '' && previousOperand !== '' && operation !== operator) {
        operator = operation
        justCalculated = false;
    } else if (previousOperand !== '' && currentOperand !== '') {
        operate(previousOperand, currentOperand, operator, operation);
        updateDisplay();
    } 
}

const operate = function(firstOperand, secondOperand, operation, nextOperation) {
    let computation;
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        return;
    } else if (firstOperand == '') {
        return;
    } else if (secondOperand == '') {
        secondOperand = firstOperand;
    }
    switch (operation) {
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
    if (nextOperation == null) {
        operator = '';
    } else {
        operator = nextOperation
    }
    currentOperand = computation;
    previousOperand = ''
    justCalculated = true;
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