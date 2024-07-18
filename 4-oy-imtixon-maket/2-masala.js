console.log("2- VAZIFA");

// Arraydagi eng kichik sonni topuvchi fuksiya yarating va u eng kichik raqamni 4 chi darajasini string holda qaytarsin filter ishlatish mumkin
const son = [45, 3, 78, 8, 96];
console.log(son);
let engKichikSon = son[0];

for (let i = 0; i < son.length; i++) {
  if (engKichikSon > son[i]) {
    engKichikSon = son[i];
  }
}

engKichikSon = String(Math.pow(engKichikSon, 4));
console.log(typeof engKichikSon, engKichikSon);
