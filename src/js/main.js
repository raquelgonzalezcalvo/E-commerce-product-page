"use strict";

let minusBtn = document.querySelector(".js-minus");
let plusBtn = document.querySelector(".js-plus");
let numberInput = document.querySelector(".js-number");

let userNumber = 0;

function handleClick(ev) {
  ev.preventDefault();
  console.log("se presionó");
}

plusBtn.addEventListener("click", handleClick);
