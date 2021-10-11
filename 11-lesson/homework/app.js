'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/'];
const mainOperators = ['c', '='];
const numbersContainer = document.querySelector('.numbers');
const operationsContainer = document.querySelector('.operations');
const resultContainer = document.querySelector('.screen');
const resultEl = document.querySelector('.screen-result');
const calcEl = document.querySelector('.calc');
let displayNumber = null, memoryNumber = null, operation = null, sum = null, memorySum = '';



function Calculator() {
    this.displayNumber = displayNumber;
    this.memoryNumber = memoryNumber;
    this.operation = operation;
    this.sum = sum;
    this.memorySum = memorySum;
    calcEl.addEventListener('click', calcClick);
    function renderNumbers() {
        numbers.forEach((number) => {
            const numberBtn = document.createElement('button');
            renderElement(numberBtn, number);
            numbersContainer.append(numberBtn);
        })
    }
    function renderOperations() {
        operators.forEach((operation) => {
            const operationBtn = document.createElement('button');
            renderElement(operationBtn, operation);
            operationsContainer.append(operationBtn);
        })
    }
    function renderMainOperations() {
        mainOperators.forEach((operation) => {
            const operationBtn = document.createElement('button');
            renderElement(operationBtn, operation);
            resultContainer.append(operationBtn);
        })
    }
    function renderElement(el, arrayEl) {
        el.classList = 'btn';
        el.id = arrayEl;
        el.textContent = arrayEl;
    }
    function calcClick (e) {
        switch (e.target.id) {
            case '+': 
            case '-':
            case '*':
            case '/':
                memoryNumber = displayNumber;
                displayNumber = null;
                resultEl.textContent = null;
                memorySum = '';
                operation = e.target.id;
                break;
            case 'c':
                displayNumber = null, memoryNumber = null, operation = null, sum = null, resultEl.textContent = null;
                break;
            case '=':
                switch (operation) {
                    case '+':
                        calc.sum(memoryNumber, displayNumber);
                        break;
                    case '-':
                        calc.minus(memoryNumber, displayNumber);
                        break;
                    case '*':
                        calc.multiplication(memoryNumber, displayNumber);
                        break;
                    case '/':
                        calc.divide(memoryNumber, displayNumber);
                        break;
                }
                displayNumber = sum;
                memorySum = '';
                resultEl.textContent = sum;
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                displayNumber = memorySum + e.target.id;
                memorySum = displayNumber;
                displayNumber = parseFloat(memorySum);
                resultEl.textContent = displayNumber;
                break;
        }
    }

    renderNumbers();
    renderOperations();
    renderMainOperations();

    this.sum = function (number1, number2) {
        return sum = number1 + number2;
    }
    this.divide = function (number1, number2) {
        return sum = number1 / number2;
    }
    this.multiplication = function (number1, number2) {
        return sum = number1 * number2;
    }
    this.minus = function (number1, number2) {
        return sum = number1 - number2;
    }
}

const calc = new Calculator();

console.log(calc.sum(35, 15));