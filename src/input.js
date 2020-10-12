export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener('keydown', (event) => {
            console.log(event.key);
            switch(event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
                case 'z':
                    game.togglePause();
                    break;
                case 'x':
                    game.start();
                    break;
            }
        });
        document.addEventListener('keyup', (event) => {
            switch(event.key) {
                case 'ArrowLeft':
                    //only stops if paddle is moving left
                    if(paddle.speed < 0)
                    paddle.stop();
                    break;
                case 'ArrowRight':
                    //only stop if paddle is moving right
                    if(paddle.speed > 0)
                    paddle.stop();
                    break;
            }
        });
    }
}