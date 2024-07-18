console.log("6 - VAZIFA");

// Raqamlardan iborat array qabul qilib shu array ni ichidagi raqamlarni toq va juft arraylar ga ajratib shu arraylarni qiymatini array xolda qaytaring, misol uchun: [10, 31,2,6]; {juft: [10,2,6]; toq: [31] }

const Umumiysonlar = [10, 31, 2, 6, 32, 21, 23, 10];
console.log(Umumiysonlar);

juftVaToqSonlar(Umumiysonlar);

function juftVaToqSonlar(array) {
  const juftSonlar = [];
  const toqSonlar = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      juftSonlar.push(array[i]);
    } else {
      toqSonlar.push(array[i]);
    }
  }
  const javob = { juft: juftSonlar, toq: toqSonlar };

  return console.log(javob);
}
