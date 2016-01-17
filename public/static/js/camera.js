var Racer = Racer || {};

Racer.camera = {
	centerCar: function() {
		var currentX = Racer.car.config.posX;
		var currentY = Racer.car.config.posY;

		var canvas = Racer.canvas.layer.car.el;

		var borderOffsetX = canvas.width/2; 
		var borderOffsetY = canvas.height/2; 


		var smoothness = 0.07;
		
		if(currentX < borderOffsetX){
		
			Racer.car.config.posX += (borderOffsetX-currentX)*smoothness;
			Racer.track.config.posX += (borderOffsetX-currentX)*smoothness;
		
		} else if (currentX > canvas.width-borderOffsetX){
		
			Racer.car.config.posX -= (currentX-(canvas.width-borderOffsetX))*smoothness;
			Racer.track.config.posX -= (currentX-(canvas.width-borderOffsetX))*smoothness;
		
		}

		if(currentY < borderOffsetY){
		
			Racer.car.config.posY += (borderOffsetY-currentY)*smoothness;
			Racer.track.config.posY += (borderOffsetY-currentY)*smoothness;
		
		} else if (currentY > canvas.height-borderOffsetY){
		
			Racer.car.config.posY -= (currentY-(canvas.height-borderOffsetY))*smoothness;
			Racer.track.config.posY -= (currentY-(canvas.height-borderOffsetY))*smoothness;
		
		}


	}
};