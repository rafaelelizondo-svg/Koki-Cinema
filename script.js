const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = function () {
  navMenu.classList.toggle("active");
};
