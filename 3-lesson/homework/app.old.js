const calc = function () {

    let intAmount, result;
    let ints = [];
    let operation = [];

    //forEach

    const stringInputForUser = function(message) {
        return prompt(message);
    }

    const numberInputForUser = function(message) {
        return parseFloat(prompt(message));
    }

    const checkOperation = function (operation) {
        while(operation !== '+' && operation !== '*' && operation !== '-' && operation !== '/') {
            alert('Incorrect, type +, -, * or /, plz');
            operation = stringInputForUser('Type an operation');
        } 
        // ints.push(operation);
    }

    const checkNumbers = function (int, intOrder) {
        while (isNaN(+int)) {
            alert('Type a number, plz');
            if (intOrder === 'int1') {
                int1 = numberInputForUser('Input first operator');
            } else if (intOrder === 'int2') {
                int2 = numberInputForUser('Input second operator');
            } else if (intOrder === 'int3') {
                int3 = numberInputForUser('Input third operator');
            } else if (intOrder === 'int4') {
                int4 = numberInputForUser('Input forth operator');
            }
        }
    }

    const checkIntAmount = function () {
        while (isNaN(intAmount) || (intAmount < 2 || intAmount > 5)) {
            alert('Incorrect amount, type from 2 to 4, plz');
            intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
        }
    }
    
    // ints.push(operation) = stringInputForUser('Type an operation');
    // checkOperation();

    console.log(operation)

    intAmount = numberInputForUser('Type amount of operators (from 2 to 4)');
    // checkIntAmount();

    int1 = numberInputForUser('Input first operator');
    // checkNumbers(int1, 'int1');

    int2 = numberInputForUser('Input second operator');
    // checkNumbers(int2, 'int2');

    if (intAmount > 2) {
        int3 = numberInputForUser('Input third operator');
        checkNumbers(int3, 'int3');
        if (intAmount > 3) {
            int4 = numberInputForUser('Input forth operator');
            checkNumbers(int4, 'int4');
        }
    }

    const showResult = function () {
        const result = int1 + int2 + int3 + int4;
        alert(result);
    }

    // showResult();
}

calc();