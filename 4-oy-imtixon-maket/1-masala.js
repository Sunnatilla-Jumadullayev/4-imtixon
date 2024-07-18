// Array qabul qiluvchi funksiya yarating va u funksiya arrayni ichidagi elementlarini teskari qilsin reverse ishlatish mumkin emas
const number = [1, 2, 3, "asdasd", 4, 5, "sunnat"];
const reverseNumber = [];

for (let i = 0; i < number.length; i++) {
  reverseNumber.unshift(number[i]);
}
console.log("1- VAZIFA");
console.log(number);

console.log(reverseNumber);
