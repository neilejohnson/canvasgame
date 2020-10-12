import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'

import { buildLevel, level1 } from './levels.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.gamestate = GAMESTATE.MENU;
        //refactored to take in the game object
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.lives = 3;
        new InputHandler(this.paddle, this);
    }
    start() {
        //if the gamestate isn't game menu, do nothing. Game only starts from menu.
        if(this.gamestate !== GAMESTATE.MENU) return;
        
        let bricks = buildLevel(this, level1);
        this.gameObjects = [this.ball, this.paddle, ...bricks];
        this.gamestate = GAMESTATE.RUNNING;
    }
    update(deltaTime) {
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        //if paused or menu or gameover, the game leaves function early and does not update.
        if(this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
            ) return;
        console.log(this.paddle.position.x);
        this.gameObjects.forEach((object) => object.update(deltaTime));

        //filtered to keep objects where object.markedForDeletion is false or does not exist.
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDelection);

    }
    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));

        if(this.gamestate == GAMESTATE.PAUSED) {
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // They are divided by 2 so that the position will be center
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
        }
        if(this.gamestate == GAMESTATE.MENU) {
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // They are divided by 2 so that the position will be center
            ctx.fillText("Press 'x' to START", this.gameWidth / 2, this.gameHeight / 2)
        }
        if(this.gamestate == GAMESTATE.GAMEOVER) {
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            // They are divided by 2 so that the position will be center
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
        }
    }
    togglePause() {
        //If the gamestate is paused, switch it to running
        if(this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}