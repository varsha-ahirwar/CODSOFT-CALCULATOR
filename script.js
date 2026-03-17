let currentInput = '0';
let previousInput = '';
let operator = null;

const currDisplay = document.getElementById('curr-op');
const prevDisplay = document.getElementById('prev-op');

function updateDisplay() {
    currDisplay.innerText = currentInput;
    prevDisplay.innerText = operator ? `${previousInput} ${operator}` : '';
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') currentInput = number;
    else if (number === '.' && currentInput.includes('.')) return;
    else currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) compute();
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}