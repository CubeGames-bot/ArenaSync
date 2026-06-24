const btn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});