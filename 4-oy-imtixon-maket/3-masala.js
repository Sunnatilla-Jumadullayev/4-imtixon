console.log("3- VAZIFA");

// "Berilgan arraydagi elementning indexini qaytaruvchi funksiya tuzing. let arr = [10, 20, 30, 40, 50];
// let element = 30;
//  Output: Index of 30 in array: 2

// element = 15;
//  Output -1"

let arr = [10, 20, 30, 40, 50];
console.log(arr);
let arrElement = 50;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arrElement) {
    console.log("index of ", arr[i], " in array ", i);
  }
}
