document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.icon');
  const body = document.body;

  const savedTheme = localStorage.getItem('proby-theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    icon.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('light');

    if (body.classList.contains('light')) {
      localStorage.setItem('proby-theme', 'light');
      icon.textContent = '☀️';
    } else {
      localStorage.removeItem('proby-theme');
      icon.textContent = '🌙';
    }
  });
});