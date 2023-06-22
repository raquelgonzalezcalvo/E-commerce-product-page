"use strict";

let minusBtn = document.querySelector(".js-minus");
let plusBtn = document.querySelector(".js-plus");
let numberInput = document.querySelector(".js-number");

const addCart = document.querySelector(".js-cartBtn");
const numberCart = document.querySelector(".js-numberCart");

let userNumber = 0;

function handleClickPlus(ev) {
  userNumber++;
  numberInput.value = userNumber;
  ev.preventDefault();
  console.log(userNumber);
}

function handleClickMinus() {
  userNumber--;
  if (userNumber <= 0) {
    userNumber = 0;
  }
  numberInput.value = userNumber;
  console.log(userNumber);
}

function handleClickAdd() {
  console.log();

  // if (numberInput.value === numberCart) {
  //   numberInput.style.display = "flex";
  // } else {
  //   numberInput.style.display = "none";
  // }
}
plusBtn.addEventListener("click", handleClickPlus);
minusBtn.addEventListener("click", handleClickMinus);
addCart.addEventListener("click", handleClickAdd);
