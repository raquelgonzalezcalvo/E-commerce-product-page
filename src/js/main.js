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

const imageUrl = ["../images/image-product-1.jpg"
"../images/image-product-2.jpg"
"../images/image-product-3.jpg"
"../images/image-product-4.jpg"];


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
  drawProduct();
  priceModal.innerHTML = `125 € x${lastValue} <span>${
    lastValue * 125
  }.00 €</span>`;
}

function handleClickIcon() {
  cartModal.classList.toggle("show");

  if (lastValue === 0) {
    drawProduct();
  }
}

function handleClickDelete() {
  container.innerHTML = '<p class= "empty"> You cart is empty </p>';
  lastValue = 0;
  numberCart.innerText = lastValue;
}

function drawProduct() {
  container.innerHTML = `<div class="cart__modal__container js-container">
  <div class="cart__modal__container__details">
    <img
      class="img"
      src="./assets/images/image-product-1-thumbnail.jpg"
      alt="product"
    />
    <div class="cart__modal__container__details--div">
      <p class="cart__modal__container__details--p">
        Autumn Limited Edition..
      </p>
      <p class="cart__modal__container__details--price js-price">
        125 € x3 <span>375.00 €</span>
      </p>
    </div>
    <img
      class="cart__modal__container__details--delete js-delete"
      src="./assets/images/icon-delete.svg"
      alt="delete"
    />
  </div>
  <button class="cart__modal__container__details--checkout">
    Checkout
  </button>
</div>`;
  productDelete();
}

plusBtn.addEventListener("click", handleClickPlus);
minusBtn.addEventListener("click", handleClickMinus);
addCart.addEventListener("click", handleClickAdd);
iconBtn.addEventListener("click", handleClickIcon);
productDelete.addEventListener("click", handleClickDelete);
