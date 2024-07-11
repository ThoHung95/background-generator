const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const direction = document.getElementById("direction");
const style = document.getElementById("style");
const randomButton = document.getElementById("random");

const directions = [
  "to right",
  "to left",
  "to top",
  "to bottom",
  "to top right",
  "to top left",
  "to bottom right",
  "to bottom left",
];

function setGradient() {
  let gradient;
  if (style.value === "linear") {
    gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  } else if (style.value === "radial") {
    gradient = `radial-gradient(circle, ${color1.value}, ${color2.value})`;
  }
  console.log("Setting gradient with:", gradient);
  body.style.background = gradient;
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log("Generated random color:", color);
  return color;
}

function getRandomDirection() {
  const randomIndex = Math.floor(Math.random() * directions.length);
  const randomDirection = directions[randomIndex];
  console.log("Generated random direction:", randomDirection);
  return randomDirection;
}

function getRandomStyle() {
  const styles = ["linear", "radial"];
  const randomIndex = Math.floor(Math.random() * styles.length);
  const randomStyle = styles[randomIndex];
  console.log("Generated random style:", randomStyle);
  return randomStyle;
}

function setRandomColors() {
  console.log("Random button clicked");
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  direction.value = getRandomDirection();
  style.value = getRandomStyle();
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("change", setGradient);
style.addEventListener("change", setGradient);
randomButton.addEventListener("click", setRandomColors);

// Initial gradient setup
setGradient();
