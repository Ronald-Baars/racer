var Racer = Racer || {};

Racer.helpers = {

    clickHandler: function(click) {
        for(var ui in Racer.ui.interfaces) {

            if(Racer.ui.interfaces[ui].enabled) {

                for(var btn in Racer.ui.interfaces[ui].buttons) {
                    if( click.clientX > Racer.ui.interfaces[ui].buttons[btn].x && click.clientX < Racer.ui.interfaces[ui].buttons[btn].x + Racer.ui.interfaces[ui].buttons[btn].width && click.clientY > Racer.ui.interfaces[ui].buttons[btn].y && click.clientY < Racer.ui.interfaces[ui].buttons[btn].y + Racer.ui.interfaces[ui].buttons[btn].height) {
                        if(Racer.ui.interfaces[ui].buttons[btn].enabled) Racer.ui.interfaces[ui].buttons[btn].onclick();
                    }
                }
            }
        }
    }
};