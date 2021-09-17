let operator = null;
let int1 = null;
let int2 = null;
let sum = null;

const chooseOperator = function() {
    operator = prompt('Type an operator');
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        return operator;
    } else {
        alert('Incorrent value, plz use: +, -, * or /');
        chooseOperator();
    }
}

const enterInt1 = function() {
    int1 = parseFloat(prompt('Enter first number'));
    if (isNaN(int1)) {
        alert('Type a number, plz:(');
        enterInt1();
    }
}

const enterInt2 = function() {
    int2 = parseFloat(prompt('Enter second number'));
    if (isNaN(int2)) {
        alert('Type a number, plz:(');
        enterInt2();
    }
}

// Переделать через аргументы 

const askUser = function (message) {
    return prompt(message);
}

//

const showSum = function() {
    if (operator === '+') {
        sum = int1 + int2;
        alert('Result:' + ' ' + sum);
    } else if (operator === '-') {
        sum = int1 - int2;
        alert('Result:' + ' ' + sum);
    } else if (operator === '*') {
        sum = int1 * int2;
        alert('Result:' + ' ' + sum);
    } else if (operator === '/') {
        sum = int1 / int2;
        alert('Result:' + ' ' + sum);
    } else {
        alert('Error, try to repeat operation');
        calc();
    }
}

const calc = function () {
    chooseOperator();
    enterInt1();
    enterInt2();
    showSum();
}

calc();

