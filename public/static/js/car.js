var Racer = Racer || {};

Racer.car = {

	config: {
		// Maximum speed
		max: 50,

		// Size of the car
		width: 70,
		length: 137,

		//This is where the car will start (it will be moved to the start later)
		direction: 0,
		posX: 0,
		posY: 0,
		movedToStart: false
	},

	// Current speed
	speed: 0,

	// This function is being called by track.js,
	// it moves the car to the start position
	moveToStart: function(x, y) {
		this.config.movedToStart = true;

		this.config.posX = x;
		this.config.posY = y;
	},

	// Forwards
	throttle: function() {
		if(this.speed < this.config.max) this.speed += 0.2;
	},

	// Backwards
	reverse: function() {
		if(this.speed > 0) this.brake();
		if(this.speed > -(this.config.max/3)) this.speed -= 0.1;
	},

	// Brake
	brake: function() {
		this.speed = this.speed/1.05;
	},

	// Steering
	steer: function() {
		//Slow the car down a bit
		this.speed = this.speed/1.0025;

		// Calculate the speed
		return this.speed/(40+(20*Math.abs(this.speed)));
	},

	steerRight: function() {
		// Calculate the new direction
		this.config.direction += this.steer();
	},
	
	steerLeft: function() {
		// Calculate the new direction
		this.config.direction -= this.steer();
	},
	
	
	// Draw
	draw: function() {
		// set the Context
		var ctx = Racer.canvas.layer.car.context;

		// Size and direction of the car
		var width = this.config.width;
		var length = this.config.length;
		var direction = this.config.direction;

		// Position of the shadow (relative to the car)
		var shadowX = -12;
		var shadowY = -16;

		// The images (from preloader.js)
		var car = Racer.assets.car;
		var shadow = Racer.assets.shadow;

		// Add some friction
		this.speed = this.speed/1.01;

		// Calculate the new position of the car
		var x = this.config.posX = this.speed * Math.cos(direction) + this.config.posX;
		var y = this.config.posY = this.speed * Math.sin(direction) + this.config.posY;

		// Calculate the position of the car (taking into account the size of the car)
		// This is needed because the car will rotate from the upper left corner by default
		var offsetX = this.config.posX+(length/2);
		var offsetY = this.config.posY+(width/2);

		// Draw shadow if the shadow has loaded properly
		if(Racer.assets.shadow){
			// Save the original state
			ctx.save();

			// Set the offset
			ctx.translate(offsetX+shadowX, offsetY+shadowY);

			// Rotate the shadow
			ctx.rotate(direction);

			// Put it back to the original position
		    ctx.translate(-offsetX+shadowX,-offsetY+shadowY);

		    // Draw it to the canvas
		    ctx.drawImage(shadow, x, y, 170, 90);

		    // Restore the original state
		    ctx.restore();
		}

		// Draw car if the car has loaded properly
		if(Racer.assets.car){
			// Save the original state
			ctx.save();

			// Set the offset
			ctx.translate(offsetX, offsetY);

			// Rotate the car
			ctx.rotate(direction);
			
			// Put it back to the original position
		    ctx.translate(-offsetX,-offsetY);

		    // Draw it to the canvas
		    ctx.drawImage(car, x, y, length, width);

		    // Restore the original state
		    ctx.restore();
		}
	}
};