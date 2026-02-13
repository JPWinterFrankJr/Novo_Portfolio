const toggle = document.querySelector('.theme-toggle');
const icon = document.querySelector('.icon');
const body = document.body;

// carregar tema salvo
const savedTheme = localStorage.getItem('urcamp-theme');

if (savedTheme === 'light') {
  body.classList.add('light');
  icon.textContent = '☀️';
}

// clique no botão
toggle.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    localStorage.setItem('urcamp-theme', 'light');
    icon.textContent = '☀️';
  } else {
    localStorage.removeItem('urcamp-theme');
    icon.textContent = '🌙';
  }
});
