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
/* =========================
   VISOR DE GALERÍA
========================= */

const fotosGaleria = document.querySelectorAll(".galeria-foto img");

const visorGaleria = document.getElementById("visorGaleria");
const visorImagen = document.getElementById("visorImagen");

const visorCerrar = document.getElementById("visorCerrar");
const visorAnterior = document.getElementById("visorAnterior");
const visorSiguiente = document.getElementById("visorSiguiente");

let fotoActual = 0;


/* Abrir fotografía */

fotosGaleria.forEach((foto, index) => {

  foto.addEventListener("click", () => {

    fotoActual = index;

    mostrarFoto();

    visorGaleria.classList.add("activo");

    document.body.style.overflow = "hidden";

  });

});


/* Mostrar fotografía */

function mostrarFoto() {

  visorImagen.src = fotosGaleria[fotoActual].src;

  visorImagen.alt = fotosGaleria[fotoActual].alt;

}


/* Siguiente */

visorSiguiente.addEventListener("click", () => {

  fotoActual++;

  if (fotoActual >= fotosGaleria.length) {
    fotoActual = 0;
  }

  mostrarFoto();

});


/* Anterior */

visorAnterior.addEventListener("click", () => {

  fotoActual--;

  if (fotoActual < 0) {
    fotoActual = fotosGaleria.length - 1;
  }

  mostrarFoto();

});


/* Cerrar */

function cerrarVisor() {

  visorGaleria.classList.remove("activo");

  document.body.style.overflow = "";

}


visorCerrar.addEventListener("click", cerrarVisor);


/* Cerrar haciendo clic fuera de la fotografía */

visorGaleria.addEventListener("click", (e) => {

  if (e.target === visorGaleria) {
    cerrarVisor();
  }

});


/* Teclado */

document.addEventListener("keydown", (e) => {

  if (!visorGaleria.classList.contains("activo")) {
    return;
  }

  if (e.key === "Escape") {
    cerrarVisor();
  }

  if (e.key === "ArrowRight") {

    fotoActual++;

    if (fotoActual >= fotosGaleria.length) {
      fotoActual = 0;
    }

    mostrarFoto();

  }

  if (e.key === "ArrowLeft") {

    fotoActual--;

    if (fotoActual < 0) {
      fotoActual = fotosGaleria.length - 1;
    }

    mostrarFoto();

  }

});
