'use strict';

// variables

const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerMenu = document.getElementById('hamburger-menu');
const lines = document.getElementById('lines');
const cross = document.getElementById('cross');
const overlay = document.getElementById('overlay');
const hamburgerLink = [...document.getElementsByClassName('hamburger-link')];

// event listener

hamburgerButton.addEventListener('click', toggleMenu);
hamburgerLink.forEach((x) => x.addEventListener('click', toggleMenu));

// hamburger button

function toggleMenu() {
  lines.classList.toggle('show');
  lines.classList.toggle('hide');
  cross.classList.toggle('show');
  cross.classList.toggle('hide');

  hamburgerMenu.classList.toggle('show');
  hamburgerMenu.classList.toggle('hide');
  overlay.classList.toggle('show');
  overlay.classList.toggle('hide');
}