"use strict";

let minusBtn = document.querySelector(".js-minus");
let plusBtn = document.querySelector(".js-plus");
let numberInput = document.querySelector(".js-number");

const addCart = document.querySelector(".js-cartBtn");
const numberCart = document.querySelector(".js-numberCart");

const iconBtn = document.querySelector(".js-icon");
const cartModal = document.querySelector(".js-modal");

let priceModal = document.querySelector(".js-price");

let userNumber = 0;

let lastValue = parseInt(numberCart.innerText);

const productDelete = document.querySelector(".js-delete");
const container = document.querySelector(".js-container");

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
}

function handleClickAdd() {
  lastValue = lastValue + userNumber;
  numberCart.innerText = lastValue;
  numberCart.style.display = "block";
  priceModal.innerHTML = `125 € x${lastValue} <span>${
    lastValue * 125
  }.00 €</span>`;
}

function handleClickIcon() {
  cartModal.classList.toggle("show");
}

function handleClickDelete() {
  container.innerHTML = '<p class= "empty"> You cart is empty </p>';
}

plusBtn.addEventListener("click", handleClickPlus);
minusBtn.addEventListener("click", handleClickMinus);
addCart.addEventListener("click", handleClickAdd);
iconBtn.addEventListener("click", handleClickIcon);
productDelete.addEventListener("click", handleClickDelete);
