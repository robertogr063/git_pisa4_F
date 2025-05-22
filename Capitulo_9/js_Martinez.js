// js_Gomez.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página sobre grupos de interés cargada correctamente.");
  
    // Cambiar color del h2 al pasar el ratón (efecto visual simple)
    const titulo = document.querySelector("main h2");
    if (titulo) {
      titulo.addEventListener("mouseover", () => {
        titulo.style.color = "#007bff";
      });
      titulo.addEventListener("mouseout", () => {
        titulo.style.color = "#1f2e4d";
      });
    }
  });
  