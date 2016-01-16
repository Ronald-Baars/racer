var Racer = Racer || {};

Racer.controls = {

    init: function () {
        this.keyboard = [];

        // Setup the eventlisteners
        this.setupEventListeners();

        this.handleKeyboard();

    },

    setupEventListeners: function () {
        document.addEventListener('keydown', this.handleKeyDown.bind(this), false);
        document.addEventListener('keyup', this.handleKeyUp.bind(this), false);
    },

    handleKeyDown: function(e) {
        this.keyboard[e.keyCode] = 1;
    },

    handleKeyUp: function(e) {
        this.keyboard[e.keyCode] = 0;
    },

    handleKeyboard: function() {
        for (var i = 0; i < this.keyboard.length; i++) {
            if(this.keyboard[i] == 1) {
                
                switch(i) {
                    case 32: 
                        this.handleSpacebar();
                        break;
                    case 37: 
                        this.handleLeftKey();
                        break;
                    case 38: 
                        this.handleUpKey();
                        break;
                    case 39: 
                        this.handleRightKey();
                        break;
                    case 40: 
                        this.handleDownKey();
                        break;
                }

            }
        }
        window.requestAnimationFrame(this.handleKeyboard.bind(this));
    },

    handleSpacebar: function() {
        Racer.car.brake();
    },

    handleLeftKey: function() {
        Racer.car.steerLeft();
    },

    handleUpKey: function() {
        Racer.car.throttle();
    },

    handleRightKey: function() {
        Racer.car.steerRight();
    },

    handleDownKey: function() {
        Racer.car.reverse();
    },

};