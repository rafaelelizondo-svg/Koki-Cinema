// =========================
// MENÚ
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.onclick = function () {
    navMenu.classList.toggle("active");
  };

}


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


// =========================
// VISOR DE GALERÍA
// =========================

const fotosGaleria =
  document.querySelectorAll(".galeria-foto img");

const visorGaleria =
  document.getElementById("visorGaleria");

const visorImagen =
  document.getElementById("visorImagen");

const visorCerrar =
  document.getElementById("visorCerrar");

const visorAnterior =
  document.getElementById("visorAnterior");

const visorSiguiente =
  document.getElementById("visorSiguiente");

let fotoActual = 0;


// =========================
// COMPROBAR QUE EXISTE
// LA GALERÍA
// =========================

if (
  fotosGaleria.length > 0 &&
  visorGaleria &&
  visorImagen &&
  visorCerrar &&
  visorAnterior &&
  visorSiguiente
) {


  // =========================
  // ABRIR FOTOGRAFÍA
  // =========================

  fotosGaleria.forEach((foto, index) => {

    foto.addEventListener("click", () => {

      fotoActual = index;

      mostrarFoto();

      visorGaleria.classList.add("activo");

      document.body.style.overflow = "hidden";

    });

  });


  // =========================
  // MOSTRAR FOTOGRAFÍA
  // =========================

  function mostrarFoto() {

    visorImagen.src =
      fotosGaleria[fotoActual].src;

    visorImagen.alt =
      fotosGaleria[fotoActual].alt;

  }


  // =========================
  // SIGUIENTE
  // =========================

  visorSiguiente.addEventListener("click", () => {

    fotoActual++;

    if (fotoActual >= fotosGaleria.length) {
      fotoActual = 0;
    }

    mostrarFoto();

  });


  // =========================
  // ANTERIOR
  // =========================

  visorAnterior.addEventListener("click", () => {

    fotoActual--;

    if (fotoActual < 0) {
      fotoActual = fotosGaleria.length - 1;
    }

    mostrarFoto();

  });


  // =========================
  // CERRAR
  // =========================

  function cerrarVisor() {

    visorGaleria.classList.remove("activo");

    document.body.style.overflow = "";

  }


  visorCerrar.addEventListener(
    "click",
    cerrarVisor
  );


  // =========================
  // CERRAR AL HACER CLIC
  // FUERA DE LA FOTO
  // =========================

  visorGaleria.addEventListener("click", (e) => {

    if (e.target === visorGaleria) {

      cerrarVisor();

    }

  });


  // =========================
  // TECLADO
  // =========================

  document.addEventListener("keydown", (e) => {

    if (
      !visorGaleria.classList.contains("activo")
    ) {
      return;
    }


    // ESC

    if (e.key === "Escape") {

      cerrarVisor();

    }


    // FLECHA DERECHA

    if (e.key === "ArrowRight") {

      fotoActual++;

      if (fotoActual >= fotosGaleria.length) {
        fotoActual = 0;
      }

      mostrarFoto();

    }


    // FLECHA IZQUIERDA

    if (e.key === "ArrowLeft") {

      fotoActual--;

      if (fotoActual < 0) {
        fotoActual = fotosGaleria.length - 1;
      }

      mostrarFoto();

    }

  });

}


// =========================
// ANIMACIONES AL HACER SCROLL
// =========================

const elementosAnimados =
  document.querySelectorAll(".animar-scroll");

const observadorScroll =
  new IntersectionObserver(
    (elementos) => {

      elementos.forEach((elemento) => {

        if (elemento.isIntersecting) {

          elemento.target.classList.add("visible");

          observadorScroll.unobserve(
            elemento.target
          );

        }

      });

    },
    {
      threshold: 0.15
    }
  );


elementosAnimados.forEach((elemento) => {

  observadorScroll.observe(elemento);

});
