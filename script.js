function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
            break;
        case '-':
            return subtract(firstNum, secondNum);
            break;
        case '*':
            return multiply(firstNum, secondNum);
            break;
        case '/':
            return divide(firstNum, secondNum);
            break;
        default:
            return null;
            break;
    }
}

function getDisplayValue(x) {
    const id = parseInt(x);
    displayValue = displayValue * 10 + id;
    onScreen.textContent = displayValue;
}

function prepareForOperation(x) {
    operator = x;
    firstNum = displayValue;
    displayValue = 0;
    onScreen.textContent = "";
}

function displayResult() {
    secondNum = displayValue;
    console.log(firstNum);
    console.log(secondNum);
    displayValue = 0;
    result = operate(operator, firstNum, secondNum);
    onScreen.textContent = result;
    displayValue = result;
}

function clearDisplay() {
    firstNum = 0;
    secondNum = 0;
    displayValue = 0;
    operator = '';
    onScreen.textContent = "";
}

function deleteScreen() {
    displayValue = displayValue / 10 - displayValue % 10 / 10;
    onScreen.textContent = displayValue;
}

let result = 0;
let firstNum = 0;
let secondNum = 0;
let operator = '';

let displayValue = 0;
const onScreen = document.querySelector(".on-screen");

const one = document.querySelector(".one");
one.addEventListener("click", () => getDisplayValue(one.id));
const two = document.querySelector(".two");
two.addEventListener("click", () => getDisplayValue(two.id));
const three = document.querySelector(".three");
three.addEventListener("click", () => getDisplayValue(three.id));
const four = document.querySelector(".four");
four.addEventListener("click", () => getDisplayValue(four.id));
const five = document.querySelector(".five");
five.addEventListener("click", () => getDisplayValue(five.id));
const six = document.querySelector(".six");
six.addEventListener("click", () => getDisplayValue(six.id));
const seven = document.querySelector(".seven");
seven.addEventListener("click", () => getDisplayValue(seven.id));
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => getDisplayValue(eight.id));
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => getDisplayValue(nine.id));
const zero = document.querySelector(".zero");
zero.addEventListener("click", () => getDisplayValue(zero.id));

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {prepareForOperation('+')});
const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {prepareForOperation('-')});
const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {prepareForOperation('*')});
const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {prepareForOperation('/')});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => displayResult());

const clearButton = document.querySelector(".AC");
clearButton.addEventListener("click", () => clearDisplay());
const deleteButton = document.querySelector(".DEL");
deleteButton.addEventListener("click", () => deleteScreen());