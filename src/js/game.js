import Enemy from './enemy';
import Input from './input';
import Enemey from './enemy';
import { clearInterval } from 'timers';
import Spaceship from './spaceship';

export default class Game {

    constructor() {
        //bind functions
        this.populateEnemies = this.populateEnemies.bind(this); 
        this.renderEnemies = this.renderEnemies.bind(this); 

        //get and set canvas
        this.canvas = document.getElementById("splash");
        this.canvas.width = 1600;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext("2d");

        //Populate enemies
        this.enemeyArr = [new Enemey()]; 
        setInterval(this.populateEnemies, 2000); 

        //Create new instance of input field 
        this.field = new Input();
        this.field.input.addEventListener("keydown", (e) => {
            this.field.enterPressed(e, this.enemeyArr)
        });

        //instantiate score 
        this.score = document.getElementById("score"); 

        // inititialize mathfield 
        this.htmlElement = document.getElementById('mathField');
        this.mathField = MQ.MathField(this.htmlElement); 

        //initialize spaceship 
        this.spaceship = new Spaceship(); 
        // this.spaceship.drawSpaceship();
    }


    populateEnemies() {
        for (let i = 0; i < 1; i++) {
            this.enemeyArr.push(new Enemy());
        }
    }

    

    renderEnemies() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.enemeyArr.length; i++) {
            this.enemeyArr[i].draw(); 
        }
        this.mathField.latex(this.field.input.value);
        if (this.field.verify === true) {
            const enemy = this.enemeyArr[this.field.index]
            this.score.value = `${parseInt(this.score.value, 10) + 1}`
            this.field.verify = false; 
            if (enemy.random === 0) {
                this.spaceship.drawLeft(enemy.x, enemy.y); 
            } else if (enemy.random === 1) {
                this.spaceship.drawMiddle(enemy.x, enemy.y); 
            } else {
                this.spaceship.drawRight(enemy.x, enemy.y); 
            }
            this.enemeyArr.splice(this.field.index, 1); 
            // this.spaceship.animateMissle();
        }
        if (this.enemeyArr.length === 10) {
            this.end(); 
            document.getElementById("you-lose").style.display = "inline";
            document.getElementById("button").style.display = "inline"
            console.log("You lose"); 
        }

        this.spaceship.drawSpaceship(); 
        // this.spaceship.stopAnimation();
    }

    start() {
        this.timer = setInterval(this.renderEnemies, 100);
    }

    end() {
        window.clearInterval(this.timer);
    }
}