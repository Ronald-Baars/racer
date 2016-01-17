# CIRCUIT RACER
Hi, Thanks for checking out this experimental Racing game. The past few weeks 
I've been working on making it as best as I could in the time I had, I'll
continue working on it when I've got more free time.

**NOTE: After you select a track, you have to resize the browser for it to show** 
(I can't find the solution for this bug...)

## What it does
It's a simple racing game with the posibility to add or change tracks in a 
very simple way (just take a look at [one of the track files][11]).

You can drive around with the arrow keys,

## What the files do
For a detailed description, please click the links:

| Link              | What the file manages                            |
| ----------------- | ------------------------------------------------ |
| [main.js][1]      | The canvas element and init the game functions   |
| [preloader.js][2] | The preloader                                    |
| [draw.js][3]      | The draw functions for each object               |
| [track.js][4]     | The tiles that are needed for the track          |
| [car.js][5]       | The speed and direction of the car               |
| [camera.js][6]    | The position of the 'camera'                     |
| [controls.js][7]  | The pressed keys to control the car              |
| [ui.js][8]        | Draws the buttons and other elements of the UI   |
| [helpers.js][9]   | Helper functions such as a clickhandler          |
| [settings.js][10] | The game settings (not much)                     |


## To do
* Make the finish count laps
  * Add checkpoints to prevent cheating
* Add objects to collide in
* Add tire tracks when the car is braking or drifting
* Add W, S, A and D as 2nd controls to drive the car
* The router shouldn't be in [draw.js][3], should be merged with router.js
* change [settings.js][10] into a json file
* Design and implement the menu
* Add Collision detection
  * Drive slow on grass
  * Crash into solid objects ➞ *there arn't any yet*
* In [preloader.js][2], a function is declared in a for-loop

## Known bugs
I've been working hard to get it where it is now, unfortunately there still are some bugs.

* You have to resize the browser when you choose a track ➞ *it doesn't automatically redraw*

[1]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/main.js
[2]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/preloader.js
[3]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/draw.js
[4]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/track.js
[5]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/car.js
[6]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/camera.js
[7]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/controls.js
[8]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/ui.js
[9]:  https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/helpers.js
[10]: https://github.com/Ronald-Baars/racer/blob/develop/public/static/js/helpers.js

[11]: https://github.com/Ronald-Baars/racer/tree/develop/public/static/json/tracks