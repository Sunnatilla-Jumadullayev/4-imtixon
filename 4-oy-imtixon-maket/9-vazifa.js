console.log("9 - VAZIFA");

// String qabul qiladigan funksiya yarating va u stringni birinchi va oxirgi elementlarini o’chirib yuborsin slice ishlatish mumkin emas.

vazifa9("23456");

function vazifa9(sunnat) {
  const vazifa = sunnat.split("");
  vazifa.pop();
  vazifa.shift();

  return console.log(vazifa.join());
}
