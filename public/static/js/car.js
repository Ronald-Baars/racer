var Racer = Racer || {};

Racer.car = {

	config: {
		max: 50,

		width: 70,
		length: 137,

		direction: 0,
		posX: 0,
		posY: 0,

		movedToStart: false
	},

	speed: 0,

	moveToStart: function(x, y) {
		this.config.movedToStart = true;

		this.config.posX = x;
		this.config.posY = y;
	},

	throttle: function() {
		if(this.speed < this.config.max) this.speed += 0.2;
	},

	reverse: function() {
		if(this.speed > 0) this.brake();
		if(this.speed > -(this.config.max/3)) this.speed -= 0.1;
	},

	brake: function() {
		this.speed = this.speed/1.05;
	},

	steerRight: function() {
		this.speed = this.speed/1.0025;
		var speed = (this.speed > 0 ? this.speed : -this.speed);
		this.config.direction += this.speed/(40+(20*speed));
	},
	
	steerLeft: function() {
		this.speed = this.speed/1.0025;
		var speed = (this.speed > 0 ? this.speed : -this.speed);
		this.config.direction -= this.speed/(40+(20*speed));
	},
	
	

	draw: function() {
		var ctx = Racer.canvas.layer.car.context;

		var width = this.config.width;
		var length = this.config.length;
		var direction = this.config.direction;
		var shadowX = -12;
		var shadowY = -16;

		var car = Racer.assets.car;
		var shadow = Racer.assets.shadow;

		// add some friction
		this.speed = this.speed/1.01;

		var x = this.config.posX = this.speed * Math.cos(direction) + this.config.posX;
		var y = this.config.posY = this.speed * Math.sin(direction) + this.config.posY;

		var offsetX = this.config.posX+(length/2);
		var offsetY = this.config.posY+(width/2);

		// Draw shadow
		if(Racer.assets.shadow){
			ctx.save();
			ctx.translate(offsetX+shadowX, offsetY+shadowY);
			ctx.rotate(direction); 
		    ctx.translate(-offsetX+shadowX,-offsetY+shadowY); //put it back
		    ctx.drawImage(shadow, x, y, 170, 90);
		    ctx.restore();
		}

		// Draw car
		if(Racer.assets.car){
			ctx.save();
			ctx.translate(offsetX, offsetY);
			ctx.rotate(direction); 
		    ctx.translate(-offsetX,-offsetY); //put it back
		    ctx.drawImage(car, x, y, length, width);
		    ctx.restore();
		}


		

		//window.requestAnimationFrame(Racer.car.draw.bind(this));
	}
};