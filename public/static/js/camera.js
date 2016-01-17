var Racer = Racer || {};

Racer.camera = {

	// NOTE: There is no actual camera, objects are just being moved around
	// to simulate a camera is following the car

	centerCar: function() {
		var moveX=0, move=0;

		// Get the position of the car
		var currentX = Racer.car.config.posX;
		var currentY = Racer.car.config.posY;

		var canvas = Racer.canvas.layer.car.el;

		// Set the center point of the canvas
		var borderOffsetX = canvas.width/2; 
		var borderOffsetY = canvas.height/2; 

		// The speed of the camera
		var smoothness = 0.07;

		
		// Calculate the X positions
		if(currentX < borderOffsetX) {

			moveX = (borderOffsetX-currentX)*smoothness;

		} else if (currentX > canvas.width-borderOffsetX) {

			moveX = -(currentX-(canvas.width-borderOffsetX))*smoothness;

		}

		// Calculate the Y positions
		if(currentY < borderOffsetY) {
			
			moveY = (borderOffsetY-currentY)*smoothness;
			
		} else if (currentY > canvas.height-borderOffsetY) {
			
			moveY = -(currentY-(canvas.height-borderOffsetY))*smoothness;
			
		}

		if(moveX !== 0) {
			
			// move the car back to the center
			Racer.car.config.posX += moveX;
			
			// Move the track with it
			Racer.track.config.posX += moveX;
		}

		if(moveY !== 0) {

			// move the car back to the center
			Racer.car.config.posY += moveY;
			
			// Move the track with it
			Racer.track.config.posY += moveY;
		}


	}
};