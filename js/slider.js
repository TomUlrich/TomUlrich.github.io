'use strict';

const cardContainer = document.querySelector('.card-container');
const cardsWrapper = document.getElementById('cards-wrapper');

const leftArrowButton = document.querySelector('.left-arrow-button');
const rightArrowButton = document.querySelector('.right-arrow-button');

rightArrowButton.addEventListener('click', scrollForward);
leftArrowButton.addEventListener('click', scrollBack);

const imgageWidth = document.querySelector('.card-container').offsetWidth;

// // const columnGap = 16; // CSS: #image-wrapper {column-gap: 16px}
// let columnGap = window.getComputedStyle(cardContainer).getPropertyValue('column-gap');

// function getColumnGap(cg) {
//   cg = cg.slice(0, -2);
//   cg = parseInt(cg);
//   columnGap = cg;
//   console.log(columnGap);
//   return columnGap;
// }

// getColumnGap(columnGap);

function scrollForward() {
  cardsWrapper.scrollLeft += imgageWidth;
}

function scrollBack() {
  cardsWrapper.scrollLeft -= imgageWidth;
}
