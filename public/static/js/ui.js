var Racer = Racer || {};

Racer.ui = {

	// All settings for the UI
	
	interfaces: {
		menu: {
			enabled: true,
			background: "#000000",

			buttons: {
				start: {
					x:        100,
					y:        100,
					width:    100,
					height:   100,
					enabled:  true,
					image:    "menu_startBtn",

					onclick: function() {
						Racer.settings.track = "track1";
						Racer.route = "race";
					}
				},

				selectTrack: {
					x:        200,
					y:        100,
					width:    100,
					height:   100,
					enabled:  true,
					image:    "menu_startBtn",

					onclick: function() {
						Racer.settings.track = "track2";
						Racer.route = "race";
					}
				},

				exit: {
					x:        300,
					y:        100,
					width:    100,
					height:   100,
					enabled:  true,
					image:    "menu_startBtn",

					onclick: function() {
						Racer.settings.track = "track3";
						Racer.route = "race";
					}
				}
			}
		}
	},


	enableInterface: function(ui) {
		this.interfaces[ui].enabled = true;
		this.draw(ui);
	},

	draw: function(ui) {
        var ctx = Racer.canvas.layer.preloader.context;

        // Draw the background
        ctx.fillStyle = this.interfaces[ui].background;
        ctx.fillRect(0, 0, Racer.canvas.width, Racer.canvas.height);
        
        // Draw all buttons for the UI
        for(var btn in this.interfaces[ui].buttons) {

			// Draw the buttons on the right position
			if(this.interfaces[ui].buttons[btn].image && this.interfaces[ui].buttons[btn].enabled){
			    ctx.drawImage(
			    	Racer.assets[this.interfaces[ui].buttons[btn].image], 
					this.interfaces[ui].buttons[btn].x, 
					this.interfaces[ui].buttons[btn].y, 
					this.interfaces[ui].buttons[btn].width, 
					this.interfaces[ui].buttons[btn].height
			    );
			}

		}
	}

};