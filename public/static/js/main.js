var Racer = Racer || {};

Racer.canvas = {

    // Use multiple canvasses for layers
    layer: {
        preloader: {
            el: document.getElementById('canvas_preloader'),
            context: canvas_preloader.getContext('2d'),
        },
        ui: {
            el: document.getElementById('canvas_ui'),
            context: canvas_ui.getContext('2d'),
        },
        track: {
            el: document.getElementById('canvas_track'),
            context: canvas_track.getContext('2d'),
        },
        car: {
            el: document.getElementById('canvas_car'),
            context: canvas_car.getContext('2d'),
        },
    },

    // The function that starts it all up
    init: function () {
        // Fire the resize function to set the size of the canvas
        this.handleResize();

        // Set up the eventlisteners
        this.setupEventListeners();

        // Start the drawing function
        Racer.onEnterFrame();
    },

    setupEventListeners: function () {
        window.addEventListener('resize', this.handleResize.bind(this), false);
        window.addEventListener('click', Racer.helpers.clickHandler, false);
    },

    handleResize: function() {
        // Resize the canvasses
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        for(var cnvs in this.layer) {
            this.layer[cnvs].el.width = this.width;
            this.layer[cnvs].el.height = this.height;
        }

    }
};


Racer.canvas.init();
