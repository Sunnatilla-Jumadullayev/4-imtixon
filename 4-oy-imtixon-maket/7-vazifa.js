console.log("7 - VAZIFA");

// String da raqam qabul qilib faqat oxirida 0 raqami bo'lsa ochirib tashlaydigan va qaytaradigan funksiya tuzing

zero("23490");

function zero(string) {
  let a = Number(string);
  if (a % 10 === 0) {
    a = a / 10;
  }

  return console.log(a);
}
