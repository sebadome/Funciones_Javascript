// Ejercicio N° 3 //

const ele = document.getElementById("ele1");

function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}

ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});
