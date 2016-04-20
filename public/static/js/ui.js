var Racer = Racer || {};

Racer.ui = {

	// All settings for the UI

	interfaces: {
		menu: {
			enabled: true,
			background: "#000000",

			buttons: {
				start: {
					x:        200,
					y:        200,
					width:    200,
					height:   200,
					enabled:  true,
					image:    "menu_startBtn1",

					onclick: function() {
						Racer.track.id = "track1";
						Racer.route = "race";
					}
				},

				selectTrack: {
					x:        400,
					y:        200,
					width:    200,
					height:   200,
					enabled:  true,
					image:    "menu_startBtn2",

					onclick: function() {
						Racer.track.id = "track2";
						Racer.route = "race";
					}
				},

				exit: {
					x:        600,
					y:        200,
					width:    200,
					height:   200,
					enabled:  true,
					image:    "menu_startBtn3",

					onclick: function() {
						Racer.track.id = "track3";
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
