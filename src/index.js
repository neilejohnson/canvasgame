import Game from './game.js'

//define canvas
const canvas = document.querySelector('canvas');
//get context
let ctx = canvas.getContext('2d');

const gameWidth = 800;
const gameHeight = 600;

canvas.width = gameWidth;
canvas.height = gameHeight;

let game = new Game(gameWidth, gameHeight);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, gameWidth, gameHeight);
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);