'use strict';

const hamburgerSizes = {
    SIZE_SM: {
        price: 50,
        calories: 20,
    },
    SIZE_MD: {
        price: 75,
        calories: 30,
    },
    SIZE_LG: {
        price: 100,
        calories: 40,
    },
};
const hamburgerToppings = {
    TOPPING_CHEESE: {
        price: 10,
        calories: 20
    },
    TOPPING_SALAD: {
        price: 20,
        calories: 5
    },
    TOPPING_POTATO: {
        price: 15,
        calories: 10
    },
    TOPPING_SEASONING: {
        price: 15,
        calories: 0
    },
    TOPPING_MAYO: {
        price: 20,
        calories: 5
    },
};
let memoryToppingPrice = null, memoryToppingCalories = null;

class Hamburger {
    constructor (burger) {
        this.burger = burger;
    }
    addTopping (topping) {
        this.topping = topping;
        this.totalToppingPrice = this.topping.price + memoryToppingPrice;
        memoryToppingPrice = this.totalToppingPrice;
        this.totalToppingCalories = this.topping.calories + memoryToppingCalories;
        memoryToppingCalories = this.totalToppingCalories;
    }
    getPrice () {
        if (this.topping) {
            return this.totalPrice = this.totalToppingPrice + this.burger.price;
        } else {
            return this.burger.price;
        }  
    }
    getCalories () {
        if (this.topping) {
            return this.totalCalories = this.totalToppingCalories + this.burger.calories;
        } else {
            return this.burger.calories;
        }
    }
}

const hamburger = new Hamburger(hamburgerSizes.SIZE_SM);


hamburger.addTopping(hamburgerToppings.TOPPING_MAYO);
hamburger.addTopping(hamburgerToppings.TOPPING_POTATO);
hamburger.addTopping(hamburgerToppings.TOPPING_SALAD);
hamburger.addTopping(hamburgerToppings.TOPPING_SALAD);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCalories());