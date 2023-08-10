const btn = document.getElementById('theme-switch');
// Select the stylesheet <link>
const theme = document.getElementById('theme-link');

btn.addEventListener('click', function () {
  if (theme.getAttribute('href') == './css/light-theme.css') {
    theme.href = './css/dark-theme.css';
  } else {
    theme.href = './css/light-theme.css';
  }
});
