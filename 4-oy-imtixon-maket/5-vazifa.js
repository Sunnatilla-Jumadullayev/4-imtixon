console.log("5 - VAZIFA");
// Ikki array qabul qiladigan funksiya yasang va u funksiya ikki arrayni ichidagi raqamlarini yig’indisini qaytarsin.

const sonlar1 = [3, 5, 7, 9, 8, 6];
const sonlar2 = [1, 5, 32, 12, 3, 7];

console.log(sonlar1, sonlar2);

sonlarYigindisi(sonlar1, sonlar2);

function sonlarYigindisi(arr, array) {
  const sonlarYigindisi = arr.concat(array);
  let sonYigindisi = 0;
  for (let i = 0; i < sonlarYigindisi.length; i++) {
    sonYigindisi += sonlarYigindisi[i];
  }
  return console.log(sonYigindisi);
}
