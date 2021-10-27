//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car_height = 100;
car_width = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x = 5;
car_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	background_imageTag.onload = uploadgreencar;
	background_imageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car_y >= 0){
		car_y = car_y - 10;
		console.log("When up arrow is pressed, x = " + car_x + ", y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(car_y <= 500){
		car_y = car_y + 10;
		console.log("When down arrow is pressed, x = " + car_x + ", y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(car_x >= 0){
		car_x = car_x - 10;
		console.log("When up arrow is pressed, x = " + car_x + ", y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(car_x <= 730){
		car_x = car_x + 10;
		console.log("When up arrow is pressed, x = " + car_x + ", y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
