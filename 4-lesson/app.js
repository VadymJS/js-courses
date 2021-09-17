let users = [
    {
        name: Ivan,
        age: 18,
    }
];


// function calcUsers (usersArray) {
//     let result = 0;

//     do {
//         result++;
//     } while (usersArray[result]);

//     return result;
// }

// const amountOfUsers = calcUsers(users);
// console.log('amountOfUsers', amountOfUsers);

// const totalAge = users.reduce(function(acc, user) {
//     return acc += currentElement.age;
// }, 0);


const userisAllowedToDrink = users.map(function(user) {

    return {
        name: user.name,
        age: user.age,
        isAlowed: user.age >= 18,
    }
})