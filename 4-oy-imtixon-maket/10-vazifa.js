console.log("10 - VAZIFA");
// String qabul qiluvchi funksiya yarating va u stringni nechta ! belgisi bo’lsa hammasini olib tashlagan holda qaytarsin replace metodi ishlatish mumkin emas // "salom dunyo! hello world!" -> "salom dunyo hello world"

vazifa10("salom dun!!!!!!yo! hello world!");

function vazifa10(str) {
  const words = str.split("");
  const secondWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "!") {
    } else {
      secondWords.push(words[i]);
    }
  }
  return console.log(secondWords.join());
}
