# RGB Colour Game
This was one of my first projects when learning web development. It was an exercise to bring together everything I had learned in Javascript with my current knowledge of HTML and CSS: a game to help you learn to recognise colours based purely on their RGB values.

# Key features of code
## Generating a random RGB colour string
I required a function that would return a string in `rgb(n,n,n)` format, where `n` would be a random, valid RGB value:
```javascript
function randomColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
```
Then I needed to create an array of random colours to use for the current round; one of which will be the correct answer:
```javascript
function generateRandomColours(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		arr.push(randomColour());
	}
	return arr;
}
```
When we select easy mode, we get three random colours to choose from; when we choose hard, it's six.

## Easy and hard mode
The game can be switched between easy and hard mode. Easy mode gives you three colours to guess from; hard mode gives you six.
```javascript
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	nSquares = 3;
	colours = generateRandomColours(nSquares);
```
```javascript
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	nSquares = 6;
	colours = generateRandomColours(nSquares);
```
## Assign random colours to squares
```HTML
<div id="container">
	<div class="square"></div>
	<div class="square"></div>
	<div class="square"></div>
	<div class="square"></div>
	<div class="square"></div>
	<div class="square"></div>
</div>
```
These six (or three, if you choose easy mode) squares need to be coloured from the array of random colours we've generated and assigned click listeners to trigger code to check answer:
```javascript
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
```
This is a demo project with no real purpose; do with it what you will!
