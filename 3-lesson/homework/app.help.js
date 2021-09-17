function calc () {
    let intAmount, result;
    let ints = [];
    let operation = [];

    function stringInputForUser (message) {
        return prompt(message);
    }

    function numberInputForUser (message) {
        return parseFloat(prompt(message));
    }

    function checkOperation () {
        while (operation[0] !== '+' && operation[0] !== '*' && operation[0] !== '-' && operation[0] !== '/') {
            alert('Incorrect, type +, -, * or /, plz');
            operation.pop();
            operation.push(stringInputForUser ('Type an operation'));
        }
    }

    function checkIntAmount () {
        while (isNaN(intAmount) || (intAmount < 2 || intAmount > 5)) {
            alert('Incorrect amount, type from 2 to 4, plz');
            intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
        }
    }

    function checkInts (int, intOrder) {
        while (isNaN(+int)) {
            alert('Type a number, plz');
            ints.pop();
            if (intOrder === 'int1') {
                console.log(ints[0], ints, int)
                int = ints.push(numberInputForUser('Input first operator'));
                console.log(ints[0], ints, int)
            } else if (intOrder === 'int2') {
                ints[1] = ints.push(numberInputForUser('Input second operator'));
            } else if (intOrder === 'int2') {
                ints[2] = ints.push(numberInputForUser('Input third operator'));
            } else if (intOrder === 'int3') {
                ints[3] = ints.push(numberInputForUser('Input forth operator'));
            }
        }
    } 

    function typeInts () {
        ints.push(numberInputForUser('Input first operator'));
        checkInts(ints[0], 'int1');
        ints.push(numberInputForUser('Input second operator'));
        checkInts(ints[1], 'int2');
        if (intAmount > 2) {
            ints.push(numberInputForUser('Input third operator'));
            checkInts(ints[2], 'int3');
            if (intAmount > 3) {
                ints.push(numberInputForUser('Input forth operator'));
                checkInts(ints[3], 'int4');
            } 
        }
    }

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

    operation.push(stringInputForUser ('Type an operation'));
    checkOperation();
    
    intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
    checkIntAmount();

    typeInts();

    calcResult();

    showResult();
}

calc();