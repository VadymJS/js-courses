"use strict";

const user = {
    name: 'Bob',
    age: 34,
    id: 1,
    address: {
        city: 'Odessa',
        country: 'Ukraine'
    },
    books: [
        {
            name: 'red one',
            id: 35,
            author: {
                name: 'Some Author',
                id: 277
            },
            tags:['history', 'roman']
        }
    ]
}

function newUser (obj) {
    let copy = {}
    for (let key in obj) {
        if(typeof obj[key] === 'object') {
            copy[key] = newUser(obj[key]);
        } else if (Array.isArray(obj[key])) {
            copy[key] = obj[key];
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}
console.log(newUser(user));