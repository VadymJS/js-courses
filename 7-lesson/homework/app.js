"use strict";

function counterArray (maxNumber, array = []) {
    while (maxNumber > 0 && maxNumber < 8) {
        array.push(maxNumber);
        maxNumber--;
    }
    array.sort();
    console.log(array);

    function resultArray (array) {
        result = array.reduce((sum, value) => {
            if (array.length) {
                return sum + value
            } else {
                return sum
            }
        })
    }
    resultArray(array);
}

let result;

counterArray(1);

console.log(result);