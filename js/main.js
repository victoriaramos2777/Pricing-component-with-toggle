import "../assets/styles/style.css";
//constante para llamar el selector
const selector = document.getElementById("selector-barra");

// evento escucha para el selector-barra
selector.addEventListener("click", myFuncion);
// funcion para selecionar
function myFuncion() {
  let mensual = document.getElementsByTagName("h3");
  let anual = document.getElementsByTagName("h4");

  for (let i = 0; i < mensual.length; i++) {
    for (let x = 0; x < anual.length; x++) {
      if (mensual[i].style.display === "none") {
        mensual[i].style.display = "block";
        anual[i].style.display = "none";
        selector.style.justifyContent = "flex-end";
      } else {
        mensual[i].style.display = "none";
        anual[i].style.display = "block";
        selector.style.justifyContent = "flex-start";
      }
    }
  }
}
