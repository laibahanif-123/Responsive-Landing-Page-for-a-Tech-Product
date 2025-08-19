const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    toggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
  }
});
