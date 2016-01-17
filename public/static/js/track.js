var Racer = Racer || {};

Racer.track = {

	config: {
		blockWidth: 400,
		blockHeight: 400,
		rotation: 0,
		posX: 0,
		posY: 0
	},

	blocks: [
		["╔","╗","═","║"],
		["╚","╝","╦","╣"],
		["╬"," ","╠","╩"],
		["↑","→","↓","←"],
		["░","▒","▓","█"]
	],

	tracks: [],

	finish: [],

	imageLoaded: false,

	init: function(id) {

	},

	buildMap: function(id) {
		// Each row in the array
		for (var row in Racer.assets.json[id].map) {
			var str = Racer.assets.json[id].map[row];
			// Each character in the string
			for (var i = 0; i < str.length; i++) {
				var c = str.charAt(i);
				var block = Racer.track.getBlockID(c);
				if(block[2] === true && Racer.car.config.movedToStart === false) {
					// This block is the finish
					
					Racer.car.moveToStart(
						i*Racer.track.config.blockWidth,
						(parseInt(row)*Racer.track.config.blockHeight) + Racer.track.config.blockHeight/2
					);

				}

				Racer.track.draw([i, parseInt(row)], block);
			}
		}
	},

	getBlockID: function(symbol) {
		var x, y, finish=false;
		// Search for the right block ID
		for (y = 0; y < this.blocks.length; y++) {
			x = this.blocks[y].indexOf(symbol);
			if(x !== -1) {
				if(y == 3) finish = true;
				break;
			}

		}

		//return the x and y value
		return [x, y, finish];
	},

	draw: function(position, blockID) {
		var width = this.config.blockWidth;
		var height = this.config.blockHeight;
		var startX = position[0] * width;
		var startY = position[1] * height;
		var spriteX = startX - (blockID[0] * width);
		var spriteY = startY - (blockID[1] * height);
		var rotation = this.config.rotation;
		
		var ctx = Racer.canvas.layer.track.context;

		var img = Racer.assets.track;

		// When the image is loaded, draw it
		ctx.save();
	    ctx.beginPath();
	    ctx.rotate(rotation); 

		ctx.rect(startX+this.config.posX, startY+this.config.posY, width, height);
	    ctx.closePath();
	    ctx.clip();

	    ctx.drawImage(img, spriteX+this.config.posX, spriteY+this.config.posY);

	    ctx.restore();
	}
};