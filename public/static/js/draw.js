var Racer = Racer || {};

Racer.onEnterFrame = function() {

    // Clear the canvas
    Racer.canvas.layer.track.context.clearRect(0, 0, Racer.canvas.width, Racer.canvas.height);
    Racer.canvas.layer.car.context.clearRect(0, 0, Racer.canvas.width, Racer.canvas.height);

        
    switch(Racer.route) {
        

        case "preloader":
            if(!Racer.preloader.hidden) Racer.preloader.draw();
        break;




        case "menu":
            Racer.ui.enableInterface("menu");
        break;




        case "race":
            // Build the map
            Racer.track.buildMap(Racer.settings.track);
            
            // Draw the car
            Racer.car.draw();

            // Update the camera
            Racer.camera.centerCar();
        break;
    }



    window.requestAnimationFrame(Racer.onEnterFrame);
};