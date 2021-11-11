'use strict';


let memArr = [];

function sum (int) {
    let res = 5 + int;
    if(memArr.includes(res)) {
        console.log('from memory: ', memArr.find(el => el === res));
    } else {
        memArr.push(res);
        console.log(res);
    }
}

sum(2);
sum(3);
sum(2);



