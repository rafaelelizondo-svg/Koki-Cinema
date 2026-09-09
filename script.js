document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

});
