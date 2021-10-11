// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log(this.name);
//     }
// }

// const vasya = new User ("Vasya");

// vasya.sayHi();

///////////////////////////////

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '*', '/'];
function Calculator(base) {
    this.base = base;
    this.sum = function () {

    }
    this.divide = function () {

    }
}

const calc1 = new Calculator(5);

calc1.sum(10); // 15
calc1.sum(20); // 35