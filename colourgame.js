var nSquares = 6;
var colours = generateRandomColours(nSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	nSquares = 3;
	colours = generateRandomColours(nSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i]
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	nSquares = 6;
	colours = generateRandomColours(nSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	colours = generateRandomColours(nSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	this.textContent = "New colours";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i]
	}
	h1.style.backgroundColor = "steelblue";
})

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colours[i]
	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;
		if (clickedColour === pickedColour){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play again?";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function randomColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColours(n){
	//make array
	var arr = [];
	//add n random colours to array
	for(var i = 0; i < n; i++){
		arr.push(randomColour());
	}
	//return array
	return arr;
}

function changeColours(colour){
	for(var i = 0; i < colours.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}