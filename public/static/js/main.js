var Racer = Racer || {};

Racer.canvas = {
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


    width: 0,
    height: 0,
    

    init: function () {
        this.handleResize();
        this.setupEventListeners();
        
        Racer.onEnterFrame();
    },

    preloaded: function () {
        console.log("loading complete");
        Racer.controls.init();
        Racer.track.init(Racer.settings.track);
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