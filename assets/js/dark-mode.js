// Dark Mode Activation
const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme preference or use OS preference
const currentTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  let theme = "light";

  if (this.checked) {
    document.body.classList.add("dark-mode");
    theme = "dark";

  } else {
    document.body.classList.remove("dark-mode");
  }

  localStorage.setItem("theme", theme);
});