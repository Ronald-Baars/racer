var Racer = Racer || {};

// The loaded files will be stored here
Racer.assets = {
    json: {}
};


Racer.preloader = {

    // The files that will be loaded by the preloader
    url: {
        track1:         'static/json/tracks/track-1.json',
        track2:         'static/json/tracks/track-2.json',
        track3:         'static/json/tracks/track-3.json',

        track:          'static/img/track.png',
        car:            'static/img/car.png',
        tiretracks:     'static/img/tiretracks.png',
        shadow:         'static/img/car_shadow.png',

        menu_startBtn1:  'static/img/track-1.png',
        menu_startBtn2:  'static/img/track-2.png',
        menu_startBtn3:  'static/img/track-3.png'
    },

    // The properties of the preloading animation
    ui: {
        background: {
            visible: true,
            color: 'rgba(0,0,0, 1)'
        },
        logo: {
            visible: false,
            font: '70pt basscrw',
            color: 'rgba(255,255,255, 0)',
            textAlign: 'center',
            offsetTop: 40,
            lineHeight: 80,
            x: 0,
            y: 0
        },
        lineLeft: {
            visible: false,
            color: 'rgba(255, 255, 255, 1)',
            x: 0,
            y: 0
        },
        lineRight: {
            visible: false,
            color: 'rgba(231, 29, 54, 1)',
            x: 0,
            y: 0
        },
        progressBar: {
            visible: false,
            width: 0,
            targetWidth: 400,
            height: 2,
            color: 'rgba(255, 255, 255, 1)',
            x: 0,
            y: 0
        }
    },

    hidden: false,
    preloadComplete: false,
    loadingStarted: false,
    currentAnimationFrame: 0,
    currentFile: 0,
    totalFiles: 0,




    // Start loading
    start: function() {
        // Make sure this function can only be fired once
        if(!this.loadingStarted) {

            this.loadingStarted = true;
            this.xobj = [];

            // For each file
            for(var i in this.url) {

                // check if it's a JSON file
                if(this.url[i].slice(-4) === "json") {

                    this.xobj[i] = new XMLHttpRequest();
                    this.xobj[i].overrideMimeType("application/json");
                    this.xobj[i].open('GET', this.url[i], true);
                    this.xobj[i].name = i;

                    // TODO: Declaring a function in a for-loop isn't right,
                    //       but I didn't see another way (yet...)

                    this.xobj[i].onreadystatechange = (function (e) {
                        var file = e.currentTarget.name;
                        if (this.xobj[file].readyState == 4 && this.xobj[file].status == "200") {
                            Racer.assets.json[file] = JSON.parse(this.xobj[file].responseText);
                            this.fileFinished(file);
                        }
                    }.bind(this));

                    this.xobj[i].send(null);
                    this.currentFile++;

                } else {

                    Racer.assets[i] = new Image();
                    Racer.assets[i].src = this.url[i];
                    Racer.assets[i].onload = this.fileFinished.bind(this);
                    this.currentFile++;

                }
            }
            this.totalFiles = Object.keys(this.url).length;
        }
    },



    fileFinished: function (file) {

        this.currentFile--;

        if(this.currentFile <= 0) {

            // all images are loaded
            this.preloadComplete = true;
            console.log("loading complete");
            Racer.controls.init();
        }
    },






    animationFrameHandler: function() {
        if(this.currentAnimationFrame === 0) {
            //first frame

            //style objects
            this.ui.lineLeft.x = (Racer.canvas.width/2)-220;
            this.ui.lineLeft.y = Racer.canvas.height/2;

            this.ui.lineRight.x = (Racer.canvas.width/2)+220;
            this.ui.lineRight.y = Racer.canvas.height/2;


            //Go to next frame
            this.currentAnimationFrame++;

        }

        if(this.currentAnimationFrame < 100) {
            //Animate in

            //show/hide objects
            this.ui.progressBar.visible = false;
            this.ui.logo.visible = true;
            this.ui.lineLeft.visible = true;
            this.ui.lineRight.visible = true;


            //style objects
            this.ui.logo.x = Racer.canvas.width/2;
            this.ui.logo.y = (Racer.canvas.height/2);
            this.ui.logo.color = 'rgba(255,255,255, ' + (1-((50-this.currentAnimationFrame)/50)) + ')';



            //Go to next frame
            this.currentAnimationFrame++;


        } else if(this.currentAnimationFrame === 100) {
            //Load the assets
            this.start();


            //Declare variables
            var animationTarget = (this.totalFiles + 1 - this.currentFile) * (this.ui.progressBar.targetWidth/this.totalFiles)


            //show/hide objects
            this.ui.progressBar.visible = true;


            //style objects
            this.ui.progressBar.x = Racer.canvas.width/2;
            this.ui.progressBar.y = Racer.canvas.height/2;

            if(this.ui.progressBar.width < animationTarget) this.ui.progressBar.width += (animationTarget - this.ui.progressBar.width)/10;

            if(this.ui.progressBar.width >= 400 && this.preloadComplete === true) {
                this.currentAnimationFrame++;
            }



        } else if (this.currentAnimationFrame > 100 && this.currentAnimationFrame < 200) {
            //Animate out

            //Declare variables
            var currentFrame = this.currentAnimationFrame-100;



            //show/hide objects
            this.ui.logo.visible = false;


            //style objects
            this.ui.progressBar.width -= (this.ui.progressBar.width)/10;
            this.ui.progressBar.color = 'rgba(255,255,255, ' + (1-(currentFrame/70)) + ')';


            this.ui.lineLeft.x += (this.ui.progressBar.width)/18;
            this.ui.lineLeft.color = 'rgba(255,255,255, ' + (1-(currentFrame/70)) + ')';

            this.ui.lineRight.x -= (this.ui.progressBar.width)/18;
            this.ui.lineRight.color = 'rgba(231,29,54, ' + (1-(currentFrame/70)) + ')';

            this.ui.background.color = 'rgba(0,0,0, 1)';

            //Go to next frame
            this.currentAnimationFrame++;
        } else {
            //animation complete
            console.log("Animations finished");
            this.hidden = true;
            Racer.route = "menu";
        }
    },





    draw: function() {
        this.animationFrameHandler();
        var ctx = Racer.canvas.layer.preloader.context;
        ctx.clearRect(0, 0, Racer.canvas.width, Racer.canvas.height);


        //gray background
        if(this.ui.background.visible === true) {
            ctx.fillStyle = this.ui.background.color;
            ctx.fillRect(0, 0, Racer.canvas.width, Racer.canvas.height);
        }


        //logo text
        if(this.ui.logo.visible === true) {
            ctx.font         = this.ui.logo.font;
            ctx.fillStyle    = this.ui.logo.color;
            ctx.textAlign    = this.ui.logo.textAlign;

            ctx.fillText('Circuit', this.ui.logo.x+30, this.ui.logo.y+30 - (this.ui.logo.lineHeight/2));
            ctx.fillText('Racer', this.ui.logo.x-70, this.ui.logo.y+30 + (this.ui.logo.lineHeight/2));
        }



        //progress bar
        if(this.ui.progressBar.visible === true) {

            ctx.beginPath();

            var center = this.ui.progressBar.x - (this.ui.progressBar.width/2)-45;

            ctx.lineTo(center, this.ui.progressBar.y+100);
            ctx.lineTo(center+this.ui.progressBar.width, this.ui.progressBar.y+100);
            ctx.lineTo(center+90+this.ui.progressBar.width, this.ui.progressBar.y-100);
            ctx.lineTo(center+90, this.ui.progressBar.y-100);

            ctx.closePath();
            ctx.fillStyle = this.ui.progressBar.color;
            ctx.fill();
        }


        //Line Left
        if(this.ui.lineLeft.visible === true) {
            drawLine(this.ui.lineLeft.x, this.ui.lineLeft.y, this.ui.lineLeft.color);
        }

        //Line Right
        if(this.ui.lineRight.visible === true) {
            drawLine(this.ui.lineRight.x, this.ui.lineRight.y, this.ui.lineRight.color);
        }



        function drawLine(x, y, color) {
            ctx.beginPath();

            ctx.lineTo(x-50, y+100);
            ctx.lineTo(x-40, y+100);
            ctx.lineTo(x+50, y-100);
            ctx.lineTo(x+40, y-100);

            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }
    }
};
