const keyDiv = document.getElementById("key");

function changeKeyColor(color) {
  keyDiv.style.backgroundColor = color;
}

function createDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = color;
  newDiv.style.margin = "10px";
  newDiv.style.border = "2px solid black";
  document.body.appendChild(newDiv);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    changeKeyColor("pink");
  } else if (event.key === "s") {
    changeKeyColor("orange");
  } else if (event.key === "d") {
    changeKeyColor("skyblue");
  } else if (event.key === "q") {
    createDiv("purple");
  } else if (event.key === "w") {
    createDiv("gray"); // Gris
  } else if (event.key === "e") {
    createDiv("brown");
  } else {
    console.log("Tecla no asignada");
  }
});
