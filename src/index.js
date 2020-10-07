import Paddle from './paddle.js'
import InputHandler from './input.js'

//define canvas
const canvas = document.querySelector('canvas');
//get context
let ctx = canvas.getContext('2d');

const gameWidth = 800;
const gameHeight = 600;

canvas.width = gameWidth;
canvas.height = gameHeight;

let paddle = new Paddle(gameWidth, gameHeight);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, gameWidth, gameHeight);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
};

gameLoop();