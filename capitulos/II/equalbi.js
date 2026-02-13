document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.icon');
  const body = document.body;

  const savedTheme = localStorage.getItem('equalbi-theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    icon.textContent = '☀️';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('light');

    if (body.classList.contains('light')) {
      localStorage.setItem('equalbi-theme', 'light');
      icon.textContent = '☀️';
    } else {
      localStorage.removeItem('equalbi-theme');
      icon.textContent = '🌙';
    }
  });
});
