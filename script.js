const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = function () {
  navMenu.classList.toggle("active");
};

// =========================
// CONVERSOR DE PIES A METROS
// =========================

function convertirPies() {

  const pies = parseFloat(
    document.getElementById("pies").value
  );

  const resultado =
    document.getElementById("resultado");

  if (isNaN(pies)) {

    resultado.textContent =
      "Ingresa una cantidad válida";

    return;
  }

  const metros = pies * 0.3048;

  resultado.textContent =
    metros.toFixed(2) + " metros";
}
