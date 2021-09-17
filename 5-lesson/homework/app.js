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
    }
];

console.log('First part:');

const isNotAdult = users.filter((user) => user.age < 18); 
console.log(isNotAdult);

console.log('/////////////////');

const foreignStudent = users.filter((user) => user.address.country !== 'Ukraine');
console.log(foreignStudent);

console.log('/////////////////');

const newUsersArray = users.map((user) => ({
    ...user, 
    isAdult: user.age >= 18, 
    averageMark: user.marks.reduce((sum, value) => sum + value) / user.marks.length
}));
console.log(newUsersArray);

console.log('/////////////////');

const averageMarksOfUsers = users.map((user) => user.marks.reduce((sum, value) => sum + value) / user.marks.length);
const averageMark = averageMarksOfUsers.reduce((sum, value) => sum + value) / averageMarksOfUsers.length;
console.log(averageMark);

console.log('/////////////////');

const adresses = [countries = [], cities = []];
const newAddressArray = users.map((user) => {
    countries.push(user.address.country);
    cities.push(user.address.city);
});
console.log(adresses);

console.log('/////////////////');
console.log('Second part:');


const newNameArray = users.map((user) => ({name: user.name ? user.name : 'John', lastName: user.lastName ? user.lastName : 'Wick'}));
console.log(newNameArray);

console.log('/////////////////');

const newThreeKeysArray = users.map((user) => (Object.keys(user).length > 3 ? {...user} : {}));
console.log(newThreeKeysArray); 

console.log('/////////////////'); 

const newStringNumberArray = users.filter((user) => {
    const newKeysArray = Object.values(user).filter((key) => {
        return typeof key === 'string' || typeof key === 'number';
    })

    if (newKeysArray.some((key) => typeof key === 'string')) {
        if (newKeysArray.some((key) => typeof key === 'number')) {
            return {...user};
        }
    }
});
console.log(newStringNumberArray);


