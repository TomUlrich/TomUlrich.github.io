'use strict';

const leftArrowButton = document.querySelector('.left-arrow-button');
const rightArrowButton = document.querySelector('.right-arrow-button');
const imageWrapper = document.getElementById('image-wrapper');
const imgageWidth = document.querySelector('.card').offsetWidth;

// const columnGap = 16; // CSS: #image-wrapper {column-gap: 16px}
let columnGap = window.getComputedStyle(imageWrapper).getPropertyValue('column-gap');

function getColumnGap(cg) {
  cg = cg.slice(0, -2);
  cg = parseInt(cg);
  columnGap = cg;
  return columnGap;
}

getColumnGap(columnGap);

rightArrowButton.addEventListener('click', scrollForward);
leftArrowButton.addEventListener('click', scrollBack);

function scrollForward() {
  imageWrapper.scrollLeft += imgageWidth + columnGap;
}

function scrollBack() {
  imageWrapper.scrollLeft -= imgageWidth + columnGap;
}
