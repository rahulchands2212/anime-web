const menu = document.querySelector(".menu");
const sidebar = document.getElementById("sidebar");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});