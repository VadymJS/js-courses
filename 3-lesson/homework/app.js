function calc () {
    let operation, intAmount, result;
    let ints = [];
    let availableOperations = ['+', '-', '*', '/'];

    function stringInputForUser (message) {
        return prompt(message);
    }

    function numberInputForUser (message) {
        return parseFloat(prompt(message));
    }

    function checkOperation () {
        while (!availableOperations.includes(operation)) {
            alert('Incorrect, type +, -, * or /, plz');
            operation = stringInputForUser('Type an operation');
            checkOperation();
        }
    }

    function checkIntAmount () {
        while (isNaN(intAmount) || (intAmount < 2 || intAmount > 5)) {
            alert('Incorrect amount, type from 2 to 4, plz');
            intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
        }
    }

    function checkInts (intOrder) {
        ints.forEach(function (int) {
            if (isNaN(+int)) {
                alert('Type a number, plz');
                ints.pop();
                if (intOrder === 'int1') {
                    ints.push(numberInputForUser('Input first operator'));
                    checkInts('int1');
                } else if (intOrder === 'int2') {
                    ints.push(numberInputForUser('Input second operator'));
                    checkInts('int2');
                } else if (intOrder === 'int3') {
                    ints.push(numberInputForUser('Input third operator'));
                    checkInts('int3');
                } else if (intOrder === 'int4') {
                    ints.push(numberInputForUser('Input forth operator'));
                    checkInts('int4');
                }
            }
        })
    }

    function typeInts () {
        ints.push(numberInputForUser('Input first operator'));
        checkInts('int1');
        ints.push(numberInputForUser('Input second operator'));
        checkInts('int2');
        if (intAmount > 2) {
            ints.push(numberInputForUser('Input third operator'));
            checkInts('int3');
            if (intAmount > 3) {
                ints.push(numberInputForUser('Input forth operator'));
                checkInts('int4');
            } 
        }
    }

    // вынести reduce в начало

    function calcResult () {
        if (operation.includes('+')) {
            result = ints.reduce(function (sum, value){
                return sum + value;
            });
        } else if (operation.includes('-')) {
            result = ints.reduce(function (sum, value){
                return sum - value;
            });
        } else if (operation.includes('*')) {
            result = ints.reduce(function (sum, value){
                return sum * value;
            });
        } else if (operation.includes('/')) {
            result = ints.reduce(function (sum, value){
                return sum / value;
            });
        }
    }

    function showResult () {
        if (intAmount === 2) {
            alert(`${ints[0]} ${operation} ${ints[1]} = ${result}`);
        } else if (intAmount === 3) {
            alert(`${ints[0]} ${operation} ${ints[1]} ${operation} ${ints[2]} = ${result}`);
        } else if (intAmount === 4) {
            alert(`${ints[0]} ${operation} ${ints[1]} ${operation} ${ints[2]} ${operation} ${ints[3]} = ${result}`);
        }
    }

    operation = stringInputForUser('Type an operation');
    checkOperation();
    
    intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
    checkIntAmount();

    typeInts();

    calcResult();

    showResult();
}

calc();