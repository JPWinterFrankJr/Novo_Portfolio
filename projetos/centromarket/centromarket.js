const toggle = document.querySelector(".theme-toggle");
const body = document.body;
const icon = document.querySelector(".icon");

// Define tema inicial como light
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

function setTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);

  icon.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
}

// Alterna tema
toggle.addEventListener("click", () => {
  const current = body.classList.contains("dark") ? "dark" : "light";
  setTheme(current === "dark" ? "light" : "dark");
});

// Aplica tema salvo
setTheme(localStorage.getItem("theme"));
