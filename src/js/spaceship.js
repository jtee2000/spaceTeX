export default class Spaceship {

    constructor() {
        //Grab canvas 
        this.canvas = document.getElementById("splash"); 
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //bind functions
        this.drawSpaceship = this.drawSpaceship.bind(this); 
        this.drawMissle = this.drawMissle.bind(this); 
        this.animateLeft = this.animateLeft.bind(this);
        this.animateMiddle = this.animateMiddle.bind(this);
        this.animateRight = this.animateRight.bind(this); 
        this.drawLeft = this.drawLeft.bind(this); 
        this.drawMiddle = this.drawMiddle.bind(this); 
        this.drawRight = this.drawRight.bind(this); 
        this.stopAnimationLeft = this.stopAnimationLeft.bind(this); 
        this.stopAnimationMiddle = this.stopAnimationMiddle.bind(this); 
        this.stopAnimationRight = this.stopAnimationRight.bind(this); 

        //Initialize spaceship
        this.ship = new Image(); 
        this.ship.src = "src/assets/blackspaceship.png"; 

        //initialize position 
        this.xl = 790; 
        this.yl = 500; 
        this.xr = 790; 
        this.yr = 500; 
        this.xm = 790; 
        this.ym = 500; 

        //initialize dxl and dyl 
        this.dxl = -60; 
        this.dyl = -30; 

        //initialize dxm and dym
        this.dxm = 0; 
        this.dym = -78; 

        //initialize dxr and dyr
        this.dyr = -50; 
        this.dxr = 60;



    }

    drawSpaceship() {
        this.ctx.drawImage(this.ship, 750, 550, 100, 100);
    }

    drawMissle(posx, posy, x,y) {
        this.ctx.beginPath(); 
        this.ctx.moveTo(posx, posy); 
        this.ctx.lineTo(posx+ (x), posy+(y)); 
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 13; 
        this.ctx.shadowBlur = 100; 
        this.ctx.stroke(); 

    }

    animateLeft(x, y) {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.yl += this.dyl; 
        this.xl += this.dxl; 
        this.drawMissle(this.xl, this.yl, 20, 17); 
        if (this.xl <= x +128 || this.yl <= y + 256) {
            this.stopAnimationLeft(); 
        }

    }

    animateMiddle(x, y) {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ym += this.dym; 
        this.xm += this.dxm; 
        this.drawMissle(this.xm, this.ym, 0, 17); 
        if (this.ym <= y+256) {
            this.stopAnimationMiddle(); 
        }

    }

    animateRight(x, y) {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.yr += this.dyr; 
        this.xr += this.dxr
        this.drawMissle(this.xr, this.yr, -25, 17); 
        if (this.yr <= y+256 || this.xr >= x + 128) {
            this.stopAnimationRight();
        } 
    }

    drawLeft(xpos, ypos) {
        this.left = setInterval(() => {
            this.animateLeft(xpos, ypos)
        },  1000/60);
        // requestAnimationFrame(() => {
        //     this.animateLeft(xpos, ypos)
        // })
    }

    drawMiddle(xpos, ypos) {
        this.middle = setInterval(() => {
            this.animateMiddle(xpos, ypos)
        }, 1000/60); 

        // requestAnimationFrame(() => {
        //     this.animateMiddle(xpos, ypos)
        // })
    }


    drawRight(xpos, ypos) {
        this.right = setInterval(() => {
            this.animateRight(xpos, ypos)
        }, 1000/60)
        // requestAnimationFrame(() => {
        //     this.animateRight(xpos, ypos)
        // })
        // this.animateMissle();
    }

    stopAnimationLeft() {
        window.clearInterval(this.left);
        this.xl = 790;
        this.yl = 550; 
    }

    stopAnimationMiddle() {
        window.clearInterval(this.middle);
        this.xm = 790; 
        this.ym = 550; 
    }

    stopAnimationRight() {
        window.clearInterval(this.right);
        this.xr = 790; 
        this.yr = 550;
    }


}