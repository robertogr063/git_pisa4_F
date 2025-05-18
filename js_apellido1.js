// js_apellido1.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente.");
  
    // Ejemplo: mostrar una alerta al hacer clic en el título del capítulo
    const tituloCapitulo = document.querySelector("main h2");
    if (tituloCapitulo) {
      tituloCapitulo.addEventListener("click", () => {
        alert("Has hecho clic en el título del capítulo.");
      });
    }
  });
  