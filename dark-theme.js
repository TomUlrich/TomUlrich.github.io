const btn = document.getElementById('theme-switch');
// Select the stylesheet <link>
const theme = document.getElementById('theme-link');

btn.addEventListener('click', function () {
  if (theme.getAttribute('href') == 'light-theme.css') {
    theme.href = 'dark-theme.css';
  } else {
    theme.href = 'light-theme.css';
  }
});
