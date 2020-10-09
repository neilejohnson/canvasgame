import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'

import { buildLevel, level1 } from './levels.js'

export default class Game {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
    }
    start() {
        //refactored to take in the game object
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1);

        this.gameObjects = [this.ball, this.paddle, ...bricks];
        
        new InputHandler(this.paddle);
    }
    update(deltaTime) {
        this.gameObjects.forEach((object) => object.update(deltaTime));

        //filtered to keep objects where object.markedForDeletion is false or does not exist.
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDelection);

    }
    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx))
    }
}