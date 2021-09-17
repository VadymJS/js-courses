const users = [
    {
      name: 'Bob',
      age: 27,
      address:{
          country:'USA',
          city:'LA'
      },
      marks:[2,3,5,4,2,3,1,5]
    },
    {
      name: 'July',
      age: 21,
      address:{
          country:'Ukraine',
          city:'Kiev'
      },
      marks:[4,4,5,4,3,4,3,5]
    },
    {
      name: 'Monya',
      age: 15,
      address:{
          country:'Ukraine',
          city:'Odessa'
      },
      marks:[5,1,5,1,5,1,5,1]
    },
    {
      name: 'Vsevolod',
      age: 19,
      address:{
          country:'Ukraine',
          city:'Lviv'
      },
      marks:[3,4,5,3,1,2,4,6]
    },
];


let isNotAdult = users.filter(function(user) {
    return user.age < 18;
});

console.log(isNotAdult);

console.log('////////////////////');

let foreignStudent = users.filter(function(user) {
    return user.address.country !== 'Ukraine';
});

console.log(foreignStudent);

console.log('////////////////////');

let newUsersArray = users.map(function(user) {

    return {
        name: user.name,
        age: user.age,
        address: {
            country: user.address.country,
            city: user.address.city
        },
        marks: user.marks,
        isAdult: user.age >= 18,
        averageMark: user.marks.reduce(function(sum, value) {
            return sum + value;
        }) / user.marks.length
    }
});

console.log(newUsersArray);

console.log('///////////////////////');

let averageMarksOfUsers = users.map(function(user) {
    return user.marks.reduce(function(sum, value) {
        return sum + value;
    }) / user.marks.length
});

let averageMark = averageMarksOfUsers.reduce(function(sum, value) {
    return sum + value;
}) / averageMarksOfUsers.length;

console.log(averageMark);

console.log('///////////////////////');

let countries = [];
let cities = [];
let addresses = [countries, cities];

let newArray = users.map(function(user) {
    countries.push(user.address.country); 
    cities.push(user.address.city);
});

console.log(addresses);