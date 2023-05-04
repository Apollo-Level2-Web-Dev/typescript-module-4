"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 4, 5, 7];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Mezba",
    balance: 5,
    addBalance(money) {
        console.log(`My New Balance is ${this.balance + money}`);
    },
};
