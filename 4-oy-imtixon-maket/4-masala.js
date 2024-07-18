console.log("4 - VAZIFA");
// "Berilgan raqamlardan tashkil topgan arrayni har birini qiymatini 2 baravar oshirib qaytaruvchi funksiya tuzing const numbers = [1, 2, 3, 4, 5];
// console.log(doubleNumbers(numbers)); // [2, 4, 6, 8, 10]"

const number1 = [2, 4, 6, 8, 10, 12];
const doubleNumber = [];

doubleNumbers(number1);
console.log(number1);

console.log(doubleNumber);

function doubleNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    doubleNumber.push(2 * array[i]);
  }
}
