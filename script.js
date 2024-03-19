var css = document.querySelector("h3");
var firstColor = document.querySelector(".color1");
var secondColor = document.querySelector(".color2");
var body = document.getElementById("gradient");
// Add a random button:
var button = document.querySelector("button");

firstColor.value = "#FF0000";
secondColor.value = "#FFFF00";
// Display the initial CSS linear gradient property on page load:
css.textContent = getComputedStyle(body).getPropertyValue("background-image") + ";";

// Set background with manual input colors:
function setGradient() {
	var color1 = firstColor.value;
	var color2 = secondColor.value;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}

// Generate a random color with HexCode:
function generateRandomHexCode() {
	var hexCode = "#";
	while (hexCode.length < 7) {
		hexCode += (Math.round(Math.random() * 15)).toString(16)
	}
	return hexCode
}

// Set background with 2 random colors generated:
function randomBG () {
	var color1 = generateRandomHexCode();
	var color2 = generateRandomHexCode();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1 
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
// Set 2 inputs with colors match the random colors generated above:
	document.querySelector(".color1").value = color1;
	document.querySelector(".color2").value = color2;
}

// First Input EventListener:
firstColor.addEventListener("input", setGradient);
// Second Input EventListener:
secondColor.addEventListener("input", setGradient);
// Random Button EventListener:
button.addEventListener("click", randomBG);