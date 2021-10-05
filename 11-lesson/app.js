function User(name) {
    this.name = name;
    this.sayHi = function () {
        console.log(this.name);
    }
}

const vasya = new User ("Vasya");

vasya.sayHi();