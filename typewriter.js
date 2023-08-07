// 'use strict';
const getPortrait = 'Tom.getPortrait();';
const setDarkMode = 'body.setDarkMode();';
const exit = 'exit';
// const getSocialMedia = 'Tom.getSocialMedia();';
// const getTechStack = 'Tom.getTechStack();';

let i = 0;
let currentText = getPortrait; // 1 for getPortrait, 2 for txt_2
const speed = 80;

// DOM variables
const terminalContainer = document.getElementById('terminal-container');
const lastLogin = document.getElementById('last-login');
const terminal_div = document.getElementById('terminal-content');
// const output_div = document.getElementById('output-container');
const welcomeBackground = document.getElementById('welcome-background');

// todo: Open #terminal-window

addEventListener('DOMContentLoaded', (event) => {
  terminalContainer.style.opacity = '1';
  terminalContainer.style.transitionDelay = '1000ms';
});

// todo: last login
// const loginDate = new Date();
// lastLogin.innerText = 'Last login: ' + loginDate;

// start typing
setTimeout(() => {
  typeWriter();
}, 1500);

async function typeWriter() {
  // 1. getPortrait
  if (currentText === getPortrait && i < getPortrait.length) {
    terminal_div.innerHTML += getPortrait.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (currentText === getPortrait && i === getPortrait.length) {
    // 1.1 animate portrait opacity
    welcomeBackground.style.animationName = 'portrait-opacity';
    welcomeBackground.style.opacity = '1';
    i = 0;
    currentText = setDarkMode;
    await delay(2000);
    terminal_div.innerHTML = '$ ';
    typeWriter();
    // output_div.innerHTML = '';
  }
  // 2. setDarkMode
  else if (currentText === setDarkMode && i < setDarkMode.length) {
    terminal_div.innerHTML += setDarkMode.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (currentText === setDarkMode && i === setDarkMode.length) {
    // 2.1 switch to Dark Mode
    const themeSwitch = document.getElementById('theme-switch');
    const htmlBody = document.body;
    // Smooth stylesheet transition with opacity
    htmlBody.style.transition = '1.5s ease';
    htmlBody.style.opacity = '0';

    await delay(250);
    themeSwitch.style.transition = '1.5s ease';
    themeSwitch.style.opacity = '1';
    // load dark-theme.css
    // dark-theme.js: const theme = document.getElementById('theme-link');
    theme.href = 'dark-theme.css';
    htmlBody.style.opacity = '1';

    i = 0;
    currentText = exit;
    await delay(1700);
    terminal_div.innerHTML = '$ ';

    typeWriter();
    // output_div.innerHTML = '';
  }
  // 3. exit
  else if (currentText === exit && i < exit.length) {
    terminal_div.innerHTML += exit.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (currentText === exit && i === exit.length) {
    // Code here

    // output_div.innerHTML = '';
    //! END
    i = 0;
    // todo: type exit

    // currentText = exit;
    await delay(1000);
    terminal_div.innerHTML = '$ ';

    // typeWriter();
    // output_div.innerHTML = '';

    // todo: Close #terminal-window
    setTimeout(() => {
      terminalContainer.style.opacity = '0';
      terminalContainer.classList.add('hide');
    }, 500);

    // todo: then paste social media
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
