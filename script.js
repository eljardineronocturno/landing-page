const splash = document.getElementById("splash");
const content = document.getElementById("header");

splash.addEventListener("click", () => {
  splash.classList.add("glitch-hit");

  setTimeout(() => {
    splash.classList.add("hidden");
    content.classList.remove("hidden");
  }, 300);
});