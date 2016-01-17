var Racer = Racer || {};

Racer.helpers = {

    // Because there's no click handler in a canvas element by default
    clickHandler: function(click) {

        // Check all UI's (from ui.js), for each one:
        for(var ui in Racer.ui.interfaces) {

            // Check if the ui is enabled
            if(Racer.ui.interfaces[ui].enabled) {

                // If so, check all buttons, for each one:
                for(var btn in Racer.ui.interfaces[ui].buttons) {

                    // Check if the click happened on the button
                    if( click.clientX > Racer.ui.interfaces[ui].buttons[btn].x && click.clientX < Racer.ui.interfaces[ui].buttons[btn].x + Racer.ui.interfaces[ui].buttons[btn].width && click.clientY > Racer.ui.interfaces[ui].buttons[btn].y && click.clientY < Racer.ui.interfaces[ui].buttons[btn].y + Racer.ui.interfaces[ui].buttons[btn].height) {
                        
                        //Check if the button is enabled
                        if(Racer.ui.interfaces[ui].buttons[btn].enabled)

                            // If so, fire the function
                            Racer.ui.interfaces[ui].buttons[btn].onclick();
                    }
                }
            }
        }
    }
};