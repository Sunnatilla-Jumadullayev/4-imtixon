console.log("8 - VAZIFA");

// String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing. Misol uchun: "34567" => [7, 6, 5, 4, 3]

teskariArray("1234567");

function teskariArray(str) {
  const Array = str.split("");
  const teskariArray = [];

  for (let i = 0; i < Array.length; i++) {
    teskariArray.unshift(Array[i]);
  }

  return console.log(teskariArray);
}
