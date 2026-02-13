const toggle = document.querySelector('.theme-toggle');
const icon = document.querySelector('.icon');
const body = document.body;

// carregar tema salvo
const savedTheme = localStorage.getItem('index-theme');

if (savedTheme === 'light') {
  body.classList.add('light');
  icon.textContent = '☀️';
}

// clique no botão
toggle.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    localStorage.setItem('index-theme', 'light');
    icon.textContent = '☀️';
  } else {
    localStorage.removeItem('index-theme');
    icon.textContent = '🌙';
  }
});