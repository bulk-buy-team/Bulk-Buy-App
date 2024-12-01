
console.log("product page");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let noOfUnits = document.querySelectorAll(".unit-no");
console.log("yo");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    noOfUnits[i].value++;
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    if (noOfUnits[i].value > 0) {
      noOfUnits[i].value--;
    }
  });
}

console.log('Hiiiiii')
