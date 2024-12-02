// Función para cambiar el color de fondo de un elemento
function changeToBlack(element) {
  element.style.backgroundColor = "black";
}

// Agrega el evento click a cada div
const colors = ["blue", "green", "yellow", "red"];
colors.forEach((color) => {
  const element = document.getElementById(color);
  element.addEventListener("click", () => changeToBlack(element));
});
