// function add(x) {
//     function result(y) {
//         x += y;
//         return x;
//     }
//     return result;
// }



// console.log(add(1)(2));

// function calc (x) {
//     x = '2';
//     x = Number(x)
    
//     return {
//         add: function (i) {
//             x += i;
        
//             return x;
//         },
//         minus: function (i) {
//             x -= i;
        
//             return x;
//         }
//     }
// }

// console.log(calc().minus(3))

// console.log('2'.add(2).minus(3))




// function clearArr (el) {
//     return el % 2 === 0;
// }

// console.log([2,1,3,4].filter(clearArr))

// function isClosed (string) {
//     // string.
//     console.log(Array.prototype.forEach.call(string))
// }


// console.log(isClosed('()(({{[[}}{{[]]])'))


function isStringEqual(str1, str2) {
     return str1.split('') == str2.split('') || str1.split('') == str2.split('').reverse();
}

console.log(isStringEqual('kot', 'tok'), isStringEqual('kot','lob'))