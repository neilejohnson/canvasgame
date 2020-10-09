export default class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
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